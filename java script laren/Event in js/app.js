// java event
function sub() {
    document.getElementById("text").innerHTML = 'Subcribed';
    document.getElementById("btn").innerHTML = 'Subcribed';
    document.getElementById("btn").style.backgroundColor = '#262626';
}

function like() {
    document.getElementById("like").innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';
}

function keyPerss() {
    document.getElementById("text").innerHTML = 'Key Pressed 😊';
}

function windoResize() {
    document.getElementById("textarea").style.height = '100px';
    document.getElementById("form").style.fontFamily = 'Courier New';
    document.getElementById("form").style.color = '#ff0000';
}

// function onLode() {
    //     alert('Web site Is testing Loade')
    //     document.getElementById("text").innerHTML = 'Loding Sussed !'
    // }
    
    
function onScroll() {
    document.getElementById("text").innerHTML = 'Scrolling 😊';
}

// document.getElementById("btn").onclick = function() {
//     document.getElementById("btn").innerHTML ='Sub susse'
// }

document.getElementById('btn').addEventListener('click', function(e) {
    document.getElementById("btn").innerHTML ='Sub suss'

}, false)

document.getElementById('ul').addEventListener('click', function(e) {
    console.log('Ul Clicked')

}, false)
document.getElementById('li').addEventListener('click', function(e) {
    console.log('Li Clicked')

}, false)