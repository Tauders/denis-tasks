import { Task, isTasks } from '../data/dataTasks';

const localStorageCardsKey: string = 'cards';

export const getItemsFromLocalStorage = () => {
  const cardsJson: string | null = localStorage.getItem(localStorageCardsKey);

  if (cardsJson === null) {
    return false;
  }

  const cards: Task[] = JSON.parse(cardsJson);

  if (!isTasks(cards)) {
    return false;
  }

  return cards;
};

export const setItemToLocalStorage = (newCards: Task[]) => {
  localStorage.setItem(localStorageCardsKey, JSON.stringify(newCards));
};
