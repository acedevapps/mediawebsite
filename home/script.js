$(document).ready(function () {
    $("#logo_main").attr("src", "resources/icon.gif?" + new Date().getTime());
    resizeboxes();
});

//mobile support
window.onresize = resizeboxes;
function resizeboxes() {
    if (window.innerWidth > window.innerHeight) {
        document.querySelectorAll('.left').forEach(box => {box.style.width = "35vw";});
        document.querySelectorAll('.right').forEach(box => {box.style.width = "35vw";});
        document.querySelectorAll('.textbox').forEach(box => {box.style.width = "30vw";});
        document.querySelectorAll('h1').forEach(text => {text.style.fontSize = "2.5vw";});
        document.querySelectorAll('p').forEach(text => {text.style.fontSize = "1.1vw";});
    } else {
        document.querySelectorAll('.left').forEach(box => {box.style.width = "80vw";});
        document.querySelectorAll('.right').forEach(box => {box.style.width = "80vw";});
        document.querySelectorAll('.textbox').forEach(box => {box.style.width = "75vw";});
        document.querySelectorAll('h1').forEach(text => {text.style.fontSize = "7.5vw";});
        document.querySelectorAll('p').forEach(text => {text.style.fontSize = "3vw";});
    }
}

// <iframe id="bgvid" src="https://www.youtube.com/embed/bnmAi53H520?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&playlist=bnmAi53H520" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media;"></iframe>

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('bgvidplayer', {
        videoId: 'miD_TWmdGIY',
        width: self.innerHeight * 16/9 * 1.35,
        height: self.innerHeight * 1.35,
        playerVars: {
            'loop': 1,
            'controls': 0,
            'showinfo': 0,
            'playlist': 'miD_TWmdGIY'
        },
        events: { 'onReady': onPlayerReady, }
    });
}

function onPlayerReady(event) {
    console.log("PLAYER READY");
    event.target.mute();
    event.target.playVideo();
}