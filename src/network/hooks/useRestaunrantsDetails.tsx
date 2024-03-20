import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {Card4, MenuCard} from '../../model/MenuCard';
import {RESTUARANTS_DETAILS, CATAGORY} from '../../utils/Constants';

export const useRestaunrantsDetails = (resID: string) => {
  const [menuList, setMenuList] = useState<Card4[]>([]);

  const fetchMenuList = useCallback(async () => {
    const response = axios.get(RESTUARANTS_DETAILS + resID);
    const jsonResponse: MenuCard = (await response).data;
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
