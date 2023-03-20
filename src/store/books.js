import initialBooks from '../data/initial-books.json'

const initialState = {}
//to normalize the data
initialBooks.forEach(book => {
    initialState[book.id] = book
})

const booksReducer = (state=initialState, action) => {
    //we don't want to mutate the state that redux is working with at the time
    let newState = {...state}

    switch (action.type) {
        default:
            return state;
    }
}

//to get this into our root reducer, will need to export
export default booksReducer;
