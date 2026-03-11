const video = document.getElementById("video");
const btn = document.getElementById("playBtn");

btn.onclick = () => {
  if (video.paused) {
    video.play();
    btn.style.display = "none";
  } else {
    video.pause();
    btn.style.display = "block";
  }
};

video.onclick = () => {
  video.pause();
  btn.style.display = "block";
};
