import useCart from "../../hooks/useCart"
import { FaRegTrashCan } from "react-icons/fa6"
import { IoMdCloseCircleOutline } from "react-icons/io"

import "./Cart.css"

const Cart = () => {
    const {isOpen, toggleOpen, cart, editInCart, deleteFromCart} = useCart()
    let totalAmounts = null
    const getTotalAmoutns = () => {
        totalAmounts = 0
        cart.forEach(product => {
            totalAmounts += product.price * product.weight
        })
        return totalAmounts
    }
    return (
        isOpen ? (
        <div className="cartOuter go-center">
            <div className="cartBox">
                <div className="cartBox__header align-items jc-sb">
                    <h3 className="cartBox__title mb-10">your cart</h3>
                    <span onClick={() => {
                        toggleOpen()
                    }}><IoMdCloseCircleOutline/></span>
                </div>
                <table className="cartBox__cart">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Weight</th>
                            <th colSpan="2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(product => (
                                <tr key={product.id}>
                                    <td><img src={product.picture} alt={product.name}/></td>
                                    <td>{product.name}</td>
                                    <td>
                                        <input type="number" value={product.weight} onChange={e => {
                                            editInCart({
                                                ...product, weight: e.target.value
                                            })
                                        }} min="0"/>
                                    </td>
                                    <td>${product.price * product.weight}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {
                                            deleteFromCart(product.id)
                                        }}><FaRegTrashCan/></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5">Total Amounts: ${getTotalAmoutns()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        ):""
    )
}

export default Cart