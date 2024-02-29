import { useContext } from "react"
import { Cart } from "../contexts/Cart"

const useCart = () => {
    const context = useContext(Cart)
    return context
}

export default useCart