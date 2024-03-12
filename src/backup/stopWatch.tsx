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

// diferent way to call API.

/*
  const getRestraunts = async () => {
      const response = await axios.get<Root>(ALL_RESTURANTS);
      const jsonResponse = (await response).data;
      const resturants =
        jsonResponse.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestrauntList(resturants);
    };
    */

/*
const getRestraunts = async () => {
    const response = await fetch(ALL_RESTURANTS);
    const jsonResponse = await response.json();
    const resturants =
      jsonResponse.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestrauntList(resturants);
  };
*/

// How to use map in TS

// let headerMap = new Map();
// headerMap.set('Accept', 'application/json');
// headerMap.set('Content-Type', 'application/text');
