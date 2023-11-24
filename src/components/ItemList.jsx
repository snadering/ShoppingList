import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import { deleteItem } from "../api/api";

function ItemList({ items, fetchData }) {


  const removeItem = async (itemId) => {
       await deleteItem(itemId);
       fetchData();
    }

  
   return (
  <div className="container mx-auto mt-8 p-2">
    <table className="min-w-full border-2 border-black text-center mx-auto">
      <thead className="bg-navy-600 text-baby-500">
        <tr>
          <th className="px-4 py-2">Id</th>
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
  </div>
);
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
