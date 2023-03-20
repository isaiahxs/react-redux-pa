import initialBooks from '../data/initial-books.json'

//actions
export const ADD_BOOK = `books/ADD_BOOK`
export const REMOVE_BOOK = `books/REMOVE_BOOK`
export const UPDATE_BOOK = `books/UPDATE_BOOK`
export const RESET_BOOKS = `books/RESET_BOOKS`


//implicitly returning with the parentheses
export const addBook = (book) => ({
    //will send a book obj to the reducer when it is dispatched
    type: ADD_BOOK,
    book
})

//grabbing this book from the frontend
export const updateBook = (book) => ({
    type: UPDATE_BOOK,
    book
})

export const removeBook = (bookId) => ({
    type: REMOVE_BOOK,
    bookId
})

export const resetBooks = () => ({
    type: RESET_BOOKS
})




const initialState = {}
//to normalize the data
initialBooks.forEach(book => {
    initialState[book.id] = book
})

const booksReducer = (state=initialState, action) => {
    //we don't want to mutate the state that redux is working with at the time
    let newState = {...state}

    switch (action.type) {
        case ADD_BOOK: {
            newState[action.book.id] = action.book
            return newState
        }

        case UPDATE_BOOK: {
            newState[action.book.id] = action.book
            return newState
        }

        case REMOVE_BOOK:
            delete newState[action.bookId]
            return newState

        case RESET_BOOKS:
            return initialState

        default:
            return state;
    }
}

//to get this into our root reducer, will need to export
export default booksReducer;
