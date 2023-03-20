import { Link } from 'react-router-dom';
import BookIndexItem from './BookIndexItem';
import { useSelector } from 'react-redux';

const BooksIndex = () => {

  //will give us an object of books
  const bookObj = useSelector(state => state.books)

  //ORIGINAL
  // const books = [];
  const books = Object.values(bookObj);

  const resetBookData = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <ul>
        {
          books.map(book => (
            <BookIndexItem
              book={book}
              key={book.id}
            />
          ))
        }
      </ul>
      <Link to="/books/new">Add New Book</Link>
      <button onClick={resetBookData}>Reset Book Data</button>
    </section>
  );
}

export default BooksIndex;
