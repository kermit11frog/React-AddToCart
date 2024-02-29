import useCart from "../../hooks/useCart"

import "./Product.css"

const Product = (product) => {
    const {addToCart} = useCart()
    return (
        <div className="product">
            <div className="product__picture">
                <img src={product.picture} alt="product"/>
            </div>
            <h3 className="product__name">
                {product.name}
            </h3>
            <div className="product__bottom align-items jc-sb">
                <span className="product__price">${product.price} / KG</span>
                <button className="btn btn-success" onClick={() => {
                    addToCart({...product, weight: 1})
                }}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product