import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaID }) {
  console.log(pizzaID);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        // BUG pizzaId
        onClick={() => dispatch(decreaseItemQuantity(pizzaID))}
      >
        -
      </Button>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaID))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
