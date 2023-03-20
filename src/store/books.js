import initialBooks from '../data/initial-books.json'

//action for deletion
export const REMOVE_BOOK = `books/REMOVE_BOOK`

//implicitly returning with the parentheses
export const removeBook = (bookId) => ({
    type: REMOVE_BOOK,
    bookId
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
        case REMOVE_BOOK:
            delete newState[action.bookId]
            return newState


        default:
            return state;
    }
}

//to get this into our root reducer, will need to export
export default booksReducer;
