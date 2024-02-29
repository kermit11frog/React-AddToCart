import { createContext, useReducer } from 'react'
import useLocalStorage from "../hooks/useLocalStorage"

const Cart = createContext("")

const CartProvider = ({children}) => {
    const [value, changeValue] = useLocalStorage("cart")
    if (value === "") changeValue(JSON.stringify([]))
    const [state, dispatch] = useReducer((state, action) => {
        let cart = state.cart
        let isOpen = state.isOpen
        switch (action.type) {
            default:
                break
            case "APPEND":
                const ifExist = cart.findIndex(product => product.id === action.payload.id)
                if (ifExist !== -1) {
                    cart[ifExist].weight += 1
                } else {
                    cart = [...cart, action.payload]
                }
                break
            case "EDIT":
                let productIndex = cart.findIndex(product => product.id === action.payload.id)
                cart.splice(productIndex, 1, action.payload)
                break
            case "DELETE":
                cart = cart.filter(product => product.id !== action.payload)
                break
            case "TOGGLE":
                isOpen = isOpen ? false:true
        }
        changeValue(JSON.stringify(cart))
        return {cart: cart, isOpen: isOpen}
    }, {
        cart: JSON.parse(value),
        isOpen: false
    })

    const addToCart = (product) => {
        dispatch({type: "APPEND", payload: product})
    }

    const editInCart = (editedProduct) => {
        dispatch({type: "EDIT", payload: editedProduct})
    }

    const deleteFromCart = (id) => {
        dispatch({type: "DELETE", payload: id})
    }

    const toggleOpen = () => {
        dispatch({type: "TOGGLE"})
    }

    return (
        <Cart.Provider value={{
            cart: state.cart, isOpen: state.isOpen, 
            addToCart, editInCart, deleteFromCart, toggleOpen
        }}>
            {children}
        </Cart.Provider>
    )
}

export { Cart, CartProvider }