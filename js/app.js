(function() {
  document.addEventListener('DOMContentLoaded', async function() {
    const player = document.querySelector('#demo_player');
    const content = document.querySelector('#content');
    await Player5({
      playerWrapperElm: player,
      contentElm: content,
      //playListURL: '../html/data/chapter3.json'
      //playListURL: '../html/data/chapter4.json'
      //playListURL: '../html/data/chapter5.json'
      //playListURL: '../html/data/chapter6.json'
      playListURL: '../html/data/ted.json'
    });
  });
})();