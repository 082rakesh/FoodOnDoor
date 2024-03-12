import {useEffect, useState} from 'react';
import {RES_LIST} from '../../utils/Constants';
import {Restaurant, Root} from '../../model/Restaurants';
import ApiManager from '../http/ApiManager';
import {GenericRequest} from '../http/GenericRequest';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/text',
};

let request: GenericRequest = {
  method: 'Get',
  apiName: RES_LIST,
  httpHeaders: headers,
};
export const useRestrauntsList = () => {
  const [restrauntList, setRestrauntList] = useState<Restaurant[]>([]);

  useEffect(() => {
    getRestraunts();
  }, [restrauntList.length]);

  const getRestraunts = async () => {
    const jsonResponse: Root = await ApiManager.get(request);

    const resturants =
      jsonResponse.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestrauntList(resturants);
  };

  return restrauntList;
};
