import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { deleteItem } from "../api/api";

function ItemList({ items, fetchData }) {

const calcPriceTimesQuantity = (item) => item.price * item.quantity;

const totalPrice = items
  .map((item) => calcPriceTimesQuantity(item))
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const removeItem = async (itemId) => {
       await deleteItem(itemId);
       fetchData();
    }

  
   return (
  <div className="container mx-auto p-2">
    <table className="min-w-full border-2 border-black text-center mx-auto">
      <thead className="bg-navy-600 text-baby-500">
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2 border border-black">Name</th>
          <th className="px-4 py-2 border border-black">Qty</th>
          <th className="px-4 py-2 border border-black">Price</th>
          <th className="px-4 py-2 border border-black">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-baby-500 text-navy">
        {items.map((item) => (
          <Item key={item.id} item={item} onRemoveItem={removeItem} fetchData={fetchData} />
        ))}
      </tbody>
    </table>
    <div className="min-w-1/2 md:min-w-full bg-navy-500 py-2 px-5 text-baby-500 border-l-2 border-r-2 border-b-2 border-black">
      <div>Total Price: <span>${totalPrice.toFixed(2)}</span></div>
    </div>
  </div>
);
}


ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
