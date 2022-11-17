$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
});


function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5);
    $('#time').text(datetime);
});
}


function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}


document.getElementsByClassName('backgroundImg')[0].style.backgroundImage="url(\"./2.jpg\")"
function imagesChange(){
    ﻿const images = ["./1.jpg","./2.jpg","./3.jpg","./4.jpg","./5.jpg"]
    // document.getElementsByClassName('backgroundImg')[0].style.backgroundImage=`url(${images[0]})`
    
    a = Math.random()*4 + 1
    console.log('a')     
    b = Math.floor(a);
    document.getElementsByClassName('backgroundImg')[0].style.backgroundImage=`url(${images[b]})`

    }

setInterval(function(){
    imagesChange()
},5000)