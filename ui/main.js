// Counter Code
var button = document.getElementById('counter');

button.onclick = function() {
    
    // create a request object
    
    
    // make a request to the counter end point
    var request = new XmlHttpRequest();
    
    
    // captue the response and store it in a variable
    request.onreadystatechange = function(){
        
        if (request.readyState == XMLHttpRequest.DONE) {
            
            // take some action
            if (request.status == 200){
                
              var counter = request.responseText;
              var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            }
        }
          // not done
    };
    
    // render the variable in the correct span
    
   // Make the request
   
    request.open('GET', 'http://kuriyadibabu.imad.hasura-app.io/counter', true);
    request.send(null)
};




// console.log('Loaded!');
// change the text of main_text div
// var element = document.getElementById('main_text');
// element.innerHTML = 'New Value';

// Move the image
// var img = document.getElementById('madi');
// var marginLeft = 0;
// function moveRight(){
//    
//     marginLeft = marginLeft + 1;
//     img.style.marginLeft = marginLeft + 'px';
// }
// img.onclick = function () {
//    var interval = setInterval(moveRight, 50);
//     
//     
// }