document.getElementById('submit-data').addEventListener('click', function() {
    var inputText = document.getElementById('input-text').value;
    var data = { text: inputText };
  
    var XMLHR = new XMLHttpRequest();
    XMLHR.open('POST', '/list');
    XMLHR.setRequestHeader('Content-Type', 'application/json');
    XMLHR.onreadystatechange = function() {
      if (XMLHR.readyState === XMLHttpRequest.DONE) {
        if (XMLHR.status === 200) {
          console.log('Data sent successfully');
          var res = JSON.parse(XMLHR.responseText);        
          var return_list = res.list;
          console.log(return_list)
        } else {
          console.log('Error sending data');
        }
      }
    };
    XMLHR.send(JSON.stringify(data));
  });