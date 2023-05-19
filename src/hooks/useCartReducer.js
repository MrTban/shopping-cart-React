import { useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

import { CART_ACTION_TYPES } from '../reducers/cart'

export function useCartReducer() {
	const [state, dispatch] = useReducer(cartReducer, cartInitialState)

	const addToCart = (product) =>
		dispatch({
			type: CART_ACTION_TYPES.ADD_TO_CART,
			payload: product,
		})

	const removeFromCart = (product) =>
		dispatch({
			type: CART_ACTION_TYPES.REMOVE_FROM_CART,
			payload: product,
		})

	const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })

	return {
		state,
		addToCart,
		removeFromCart,
		clearCart,
	}
}