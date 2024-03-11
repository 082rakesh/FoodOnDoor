/*
  let startTime = 0;
  let elapsedTime = 0;
  let timerInterval;

  const stopWatch = () => {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      console.log('time is ', timeToString(elapsedTime));
    }, 1000);
  };

  function timeToString(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return `${minutes}:${seconds}:${milliseconds}`;
  }
*/
