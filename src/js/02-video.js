import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(TIME_KEY, seconds);
}

function setTime() {
  let time = localStorage.getItem(TIME_KEY);
  if (time !== null) {
    player.setCurrentTime(time);
  }
}

setTime();
