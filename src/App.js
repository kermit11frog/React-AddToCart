import { CartProvider } from "./contexts/Cart"

import Header from "./layouts/Header/Header"
import Main from "./layouts/Main/Main"
import Cart from "./components/Cart/Cart"

const App = () => {
    return (
        <CartProvider>
            <Cart/>
            <Header/>
            <Main/>
        </CartProvider>
    )
}

export default App