import {useEffect, useState} from 'react';
import {ALL_RESTURANTS} from '../../utils/Constants';
import {Restaurant, Root} from '../../model/Restaurants';
import axios from 'axios';

export const useRestrauntsList = () => {
  const [restrauntList, setRestrauntList] = useState<Restaurant[]>([]);

  useEffect(() => {
    getRestraunts();
  }, [restrauntList.length]);

  const getRestraunts = async () => {
    const response = await axios.get<Root>(ALL_RESTURANTS);
    const jsonResponse = (await response).data;
    const resturants =
      jsonResponse.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestrauntList(resturants);
  };

  return restrauntList;
};

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
