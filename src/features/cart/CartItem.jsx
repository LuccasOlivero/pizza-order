import DeleteItem from "./DeleteItem";
import { formatCurrency } from "../../utils/helpers";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const { pizzaId, name, quantity, totalPrice } = item;
  const id = pizzaId;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            type="round"
            onClick={() => dispatch(decreaseItemQuantity(id))}
          >
            -
          </Button>
          <span className="text-sm font-medium ">{currentQuantity}</span>
          <Button
            type="round"
            onClick={() => dispatch(increaseItemQuantity(id))}
          >
            +
          </Button>
        </div>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
