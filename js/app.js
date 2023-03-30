(function() {
  document.addEventListener('DOMContentLoaded', async function() {
    const player = document.querySelector('#demo_player');
    const content = document.querySelector('#content');
    await Player5({
      playerWrapperElm: player,
      contentElm: content,
      sortListURL: './data/app.json'
    });
  });
})();