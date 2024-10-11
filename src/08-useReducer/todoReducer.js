export const todoReducer = ( initialState = [], action) => {

    switch (action.type) {
        case 'agregar':
            // return [...state, action.payload];
            return new Error('No se han podido agregar');
        default:
            return initialState;
    }

}