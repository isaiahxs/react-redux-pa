import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookShow = () => {
  const { bookId } = useParams();
  //ORIGINAL
  // const book = {};
  const book = useSelector(state => state.books[bookId])

  const changeCheckOut = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      ID: {book.id}
      <br/>
      Title: {book.title}
      <br/>
      Author: {book.author}
      <br/>
      <button onClick={changeCheckOut}>
        {book.checkedOut === true && "Return"}
        {book.checkedOut === false && "Check Out"}
      </button>
      <br/>
      <Link to="/">Back to Books List</Link>
    </section>
  );
}

export default BookShow;
