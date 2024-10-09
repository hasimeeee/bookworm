var audio = new Audio('../audios/a1audio.mp3');
var isPlaying = false;

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}