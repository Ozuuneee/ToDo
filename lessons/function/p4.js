function printBookDetails(title, author, yearPublished) {
  return author + " wrote " + title + " in " + yearPublished;
}
const p = printBookDetails("Harry Potter", "J.K. Rowling", 1997);

console.log(p);
