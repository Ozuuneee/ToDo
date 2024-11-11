function filterBooksByYear(year) {
  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      year: 1967,
    },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];

  return books.filter((book) => book.year >= year);
}

function filterBooksByYear(filterYear) {
  let filteredBooks = [];
  // Access one by one
  for (let i = 0; i < books.length; i++) {
    // 1 book
    const thatBooksYear = books[i].year;
    // Book year >= year
    if (thatBooksYear >= filterYear) {
      // + ARR
      filteredBooks.push(books[i]);
    }
  }
  return filteredBooks;
}

console.log(filterBooksByYear(1810));
