// JavaScript array to store the book titles
const bookTitles = [
    "To Kill a Mockingbird by Harper Lee",
    "1984 by George Orwell",
    "Pride and Prejudice by Jane Austen",
    "The Great Gatsby by F. Scott Fitzgerald",
    "The Catcher in the Rye by J.D. Salinger",
    "The Lord of the Rings by J.R.R. Tolkien",
    "Harry Potter and the Sorcerer's Stone by J.K. Rowling",
    "The Hobbit by J.R.R. Tolkien",
    "The Chronicles of Narnia by C.S. Lewis",
    "The Alchemist by Paulo Coelho",
  ];

  function sortTopToBottom() {
    const sortedBooks = bookTitles.slice().sort();
    updateList(sortedBooks);
  }

  function sortBottomToTop() {
    const sortedBooks = bookTitles.slice().sort().reverse();
    updateList(sortedBooks);
  }

  function updateList(sortedBooks) {
    const bookList = document.getElementById('bookList');
    while (bookList.firstChild) {
      bookList.removeChild(bookList.firstChild);
    }
    sortedBooks.forEach(function(title) {
      const listItem = document.createElement('li');
      listItem.textContent = title;
      bookList.appendChild(listItem);
    });
  }

  sortTopToBottom();
