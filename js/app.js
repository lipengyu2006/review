(function() {
  document.addEventListener('DOMContentLoaded', async function() {
    const player = document.querySelector('#demo_player');
    const content = document.querySelector('#content');
    await Player5({
      playerWrapperElm: player,
      contentElm: content,
      //playListURL: './data/chapter3.json'
      //playListURL: './data/chapter4.json'
      //playListURL: './data/chapter5.json'
      //playListURL: './data/chapter6.json'
      playListURL: './data/ted.json'
    });
  });
})();