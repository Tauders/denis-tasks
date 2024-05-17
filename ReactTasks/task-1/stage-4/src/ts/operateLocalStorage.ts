import { Task, isTask } from '../data/dataTasks';

const localStorageCardsKey: string = 'cards';

export const getItemsFromLocalStorage = () => {
  const cardsJson: string | null = localStorage.getItem(localStorageCardsKey);

  if (cardsJson === null || !Array.isArray(JSON.parse(cardsJson))) {
    return false;
  }

  const cards: Task[] = JSON.parse(cardsJson);

  if (cards.length <= 0) {
    return false;
  }

  for (const card of cards) {
    if (!isTask(card)) {
      return false;
    }
  }

  return cards;
};

export const setItemToLocalStorage = (newCards: Task[]) => {
  localStorage.setItem(localStorageCardsKey, JSON.stringify(newCards));
};
