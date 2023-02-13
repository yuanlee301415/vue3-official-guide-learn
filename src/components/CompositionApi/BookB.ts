export default class BookB {
  title: string;
  author: string;
  date: string;
  constructor(book: BookB) {
    this.title = book.title;
    this.author = book.author;
    this.date = book.date;
  }
}
