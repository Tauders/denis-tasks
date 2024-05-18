import { Task, isTasks } from '../data/dataTasks';

const localStorageCardsKey = 'cards';

export const getItemsFromLocalStorage = (defaultValues: Task[] = []) => {
  const cardsJson = localStorage.getItem(localStorageCardsKey);

  if (cardsJson === null) {
    return defaultValues;
  }

  const cards = JSON.parse(cardsJson);

  if (!isTasks(cards)) {
    return defaultValues;
  }

  return cards;
};

export const setItemToLocalStorage = (newCards: Task[]) => {
  localStorage.setItem(localStorageCardsKey, JSON.stringify(newCards));
};
