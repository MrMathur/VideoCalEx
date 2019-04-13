chrome.runtime.onMessage.addListener(
  (message, sender, response) => {
    let videos = document.getElementsByTagName('video');
    for (let video of videos) {
      video.playbackRate = message.value;
    }
  }
);