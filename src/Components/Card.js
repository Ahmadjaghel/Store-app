import fomatCurrency from "./formatCurrency";
import { UseCartContext } from "../Context/cartContext";
const Card = ({ id, name, price, img }) => {
  const { increas, itemsQuantity, decreas, removeitem } = UseCartContext();
  return (
    <div className="bg-white  rounded-t-md w-[450px] sm:w-[300px] " key={id}>
      <div>
        <img src={img} className=" w-[100%] h-[175px] rounded-t-md" />
      </div>
      <div className="flex justify-between  items-center m-4">
        <div className="text-2xl font-semibold ">{name}</div>
        <div className="font-think text-md text-neutral-500">
          {fomatCurrency(price)}
        </div>
      </div>
      <div className="p-3">
        {!itemsQuantity(id) ? (
          <button
            onClick={() => {
              increas(id);
            }}
            className="text-center bg-blue-700   w-[100%] rounded-md text-white p-[0.2rem] hover:bg-blue-900 mt-8"
          >
            Add to Cart
          </button>
        ) : (
          <div className="mt-2">
            <div className="flex justify-center items-center mb-2">
              <button
                onClick={() => decreas(id)}
                className="bg-blue-700 w-7 h-8 text-white rounded-md mr-1"
              >
                -
              </button>
              <p className=" text-">{itemsQuantity(id)} in Cart</p>
              <button
                onClick={() => {
                  increas(id);
                }}
                className="bg-blue-700 w-7 h-8 text-white rounded-md ml-1"
              >
                +
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => removeitem(id)}
                className="bg-red-700 text-white p-1 text-sm rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
