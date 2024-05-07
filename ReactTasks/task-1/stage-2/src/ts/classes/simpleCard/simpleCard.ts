interface Card {
  id: string;
  order: number;
  title: string;
  description: string;
}
export default class simpleCard implements Card {
  id: string;
  order: number;
  title: string;
  description: string;

  constructor(fn: Card) {
    this.id = fn.id;
    this.order = fn.order;
    this.title = fn.title;
    this.description = fn.description;
  }
}
