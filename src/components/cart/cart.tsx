import { useContext } from 'react';
import React from 'react';
import { Product} from '../../services/interface'

type Props ={
    CartContext: any
}

function Cart(props: Props) {
  const { CartContext } = props;
  const { cartItems, setCartItems } = useContext(CartContext);
  let cartCheckoutPrice = 0;
  function calculatePrice() {
    cartCheckoutPrice = 0;
    cartItems.forEach((item: Product) => {
      cartCheckoutPrice += item.price;
    });
    return cartCheckoutPrice;
  }
  return (
    <>
      Total Cost :
      {' '}
      {calculatePrice()}
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
                        cartItems.map((item: Product) => (
                          <tr>
                            {' '}
                            <td><img src={item.filename} /></td>
                            {' '}
                            <td>{item.title}</td>
                            {' '}
                            <td>
                              {' '}
                              &#x20b9;
                              {item.price}
                            </td>
                            {' '}
                          </tr>
                        ))
                    }

          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
