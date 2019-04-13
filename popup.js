document.addEventListener('mouseup', () => {
  let val = document.getElementById('speed');
  console.log(val.value);

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {
      value: val.value
    });
  });
})