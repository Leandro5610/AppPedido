import { CART_REMOVE, CART_ADD, CART_CLEAR } from './../actions/CartActions'

export const initialState = {
    products: []
}

export const CardReducer = (store = initialState, action) => {
    switch (action.type) {
        case CART_ADD:
            return { ...store, products: [...store.products, action.value] }

        case CART_REMOVE:
            return { ...store, products: store.products.filter(item => item !== action.value) }

        case CART_CLEAR:
            return { ...store, products: []}

        default: return store;
    }
}