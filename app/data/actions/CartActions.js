export const CART_DELETE = 'CART_DELETE';
export const CART_REMOVE = 'CART_REMOVE';
export const CART_ADD = 'CART_ADD';
export const CART_CLEAR = 'CART_CLEAR';
export const CART_END = 'CART_END';

export const cartAdd = (value) => ({
    type:'CART_ADD',
    value
})

export const cartRemove = (value) => ({
    type:'CART_REMOVE',
    value
})

export const cartDelete = () => ({
    type:'CART_DELETE'
})

export const cartClear = () => ({
    type:'CART_CLEAR'
})

export const cartEnd = () => ({
    type:'CART_END'
})