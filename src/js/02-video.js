import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(function (error) {
    console.error('Get state error: ', error.message);
  });