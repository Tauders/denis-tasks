import { Task } from '../data/dataTasks';

const localStorageCardsKey: string = 'cards';

export const getItemsFromLocalStorage = (isType: (elem: any) => boolean) => {
  const cardsJson: string | null = localStorage.getItem(localStorageCardsKey);

  if (cardsJson === null) {
    return false;
  }
  const cards: Task[] = JSON.parse(cardsJson);

  for (const card of cards) {
    if (!isType(card)) {
      return false;
    }
  }

  return cards;
};

export const setItemToLocalStorage = (newCards: Task[]) => {
  localStorage.setItem(localStorageCardsKey, JSON.stringify(newCards));
};
