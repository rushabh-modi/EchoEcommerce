import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

import {
  removeItem,
  setDecrease,
  setIncrease,
} from '../../redux/slices/cartSlice';
import FormatPrice from '../../components/utils/FormatPrice';
import CartAmountToggle from './CartAmountToggle';

const CartItem = ({ id, name, image, color, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => dispatch(setDecrease(id))}
        setIncrease={() => dispatch(setIncrease(id))}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash
          className="remove_icon"
          onClick={() => dispatch(removeItem(id))}
        />
      </div>
    </div>
  );
};

export default CartItem;
