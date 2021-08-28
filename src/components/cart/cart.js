import { useContext } from "react";

function Cart(props) {
    const { CartContext } = props
    const { cartItems = [], setCartItems } = useContext(CartContext);
    let cartCheckoutPrice = 0;
    function calculatePrice() {
        cartCheckoutPrice = 0;
        cartItems.forEach((item) => {
            cartCheckoutPrice = cartCheckoutPrice + item.price
        })
        return cartCheckoutPrice
    }
    return <>
        Total Cost : {calculatePrice()}
        <div>
            <table>
                <thead>
                    <th>
                        image
                    </th>
                    <th>
                        title
                    </th>
                    <th>
                        quantity
                    </th>
                    <th>
                        price
                    </th>
                </thead>
                <tbody>
                    {
                        cartItems.map((item) => {
                            return <tr> <td><img src={item.filename}></img></td> <td>{item.title}</td> <td> &#x20b9; {item.price}</td> </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    </>

}

export default Cart;