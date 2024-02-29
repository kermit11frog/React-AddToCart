import Product from "../../components/Product/Product"
import { products } from "../../data"

import "./Main.css"

const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="productSection row-1">
                    <h2 className="productSection__title">latest products</h2>
                    <div className="productSection__productList gp-15">
                        {
                            products.map(product => (
                                <Product {...product} key={product.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main