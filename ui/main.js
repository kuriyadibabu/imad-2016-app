console.log('Loaded!');
// change the text of main_text div
var element = document.getElementById('main_text');
element.innerHTML = 'New Value';

// Move the image
var img = document.getElementById('madi');
img.onclick = function () {
    
    img.style.marginLeft = '100px';
    
}