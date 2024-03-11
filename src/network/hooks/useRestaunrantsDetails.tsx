import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {Card4} from '../../model/MenuCard';
import {Root} from '../../model/Restaurants';
import {RESTUARANTS_DETAILS, CATAGORY} from '../../utils/Constants';

export const useRestaunrantsDetails = (resID: string) => {
  const [menuList, setMenuList] = useState<Card4[]>([]);

  const fetchMenuList = useCallback(async () => {
    const response = axios.get<Root>(RESTUARANTS_DETAILS + resID);
    const jsonResponse: Root = (await response).data;
    const filteredCardList =
      jsonResponse.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards?.filter(
        card => card.card?.card['@type'] === CATAGORY,
      );

    const cardList = filteredCardList.map(item => item.card.card);
    setMenuList(cardList);
  }, [resID]);

  useEffect(() => {
    fetchMenuList();
  }, [fetchMenuList]);

  return menuList;
};
