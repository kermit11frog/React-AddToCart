import { useRef } from "react"
import useCart from "../../hooks/useCart"

import { FaShoppingCart } from "react-icons/fa"
import { IoMenu } from "react-icons/io5"

import "./Navigation.css"

const Navigation = () => {
    const menuRef = useRef()
    const {toggleOpen} = useCart()
    return (
        <div className="navigation row-1">
            <div className="container align-items jc-sb">
                <ul className="align-items gp-15" ref={menuRef}>
                    <li>Home</li>
                    <li>Category</li>
                    <li>Product</li>
                    <li>Deal</li>
                    <li>Contact</li>
                </ul>
                <button className="showCart" onClick={() => {
                    toggleOpen()
                }}>
                    <FaShoppingCart />
                </button>
                <button className="btn showMenu" onClick={() => {
                    const menu = menuRef.current
                    menu.classList.contains("show") ? menu.classList.remove("show"):menu.classList.add("show")
                }}>
                    <IoMenu />
                </button>
            </div>
        </div>
    )
}

export default Navigation