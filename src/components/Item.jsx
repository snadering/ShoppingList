import React from "react";
import { useState } from "react";
import { getById, update } from "../api/api"

function Item({ item, onRemoveItem, fetchData }) {

  const [editStatus, setEditStatus] = useState(false);
  const [editedValues, setEditedValues] = useState({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
  });

  const handleEditClick = () => {
    setEditStatus(true);

    setEditedValues({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    });
  }

  const handleInputChange = (e, field) => {
    setEditedValues({
      ...editedValues,
        [field]: e.target.value,
      }
    );
  }

  const handleSaveClick = async (itemId) => {
    try {

      const updatedItem = {
        id: itemId,
        name: editedValues.name,
        quantity: editedValues.quantity,
        price: editedValues.price,
      };
  

      await update(updatedItem);
      fetchData();
  

      setEditStatus(false);
      setEditedValues({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleCancelClick = () => {
    setEditedValues({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    });
    setEditStatus(false);
  }


return (
  <tr className="border">
    <td className="border border-l-2 border-black px-4 py-2">{item.id}</td>
    {editStatus ? (
      <>
        <td className="border border-black px-4 py-2">
          <input
            type="text"
            value={editedValues.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
        </td>
        <td className="border border-black px-4 py-2">
          <input
            type="number"
            value={editedValues.quantity}
            onChange={(e) => handleInputChange(e, 'quantity')}
          />
        </td>
        <td className="border border-black px-4 py-2">
          <input
            type="number"
            value={editedValues.price}
            onChange={(e) => handleInputChange(e, 'price')}
          />
        </td>
        <td className="px-4 py-2 flex justify-center">
          <button
            onClick={(e) => handleSaveClick(item.id)}
            className="bg-bluegreen-500 hover:bg-bluegreen-600 text-white font-bold py-2 px-3 rounded"
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            className="bg-red-300 hover:bg-red-400 text-white font-bold px-4 py-2 ml-2 rounded"
          >
            Cancel
          </button>
        </td>
      </>
    ) : (
      <>
        <td className="border border-black px-4 py-2">{item.name}</td>
        <td className="border border-black px-4 py-2">{item.quantity}</td>
        <td className="border border-black px-4 py-2">{item.price}</td>
        <td className="px-4 py-2 flex justify-center">
          <button
            onClick={handleEditClick}
            className="bg-bluegreen-500 hover:bg-bluegreen-600 text-white font-bold py-2 px-3 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => onRemoveItem(item.id)}
            className="bg-red-300 hover:bg-red-400 text-white font-bold px-4 py-2 ml-2 rounded"
          >
            Remove
          </button>
        </td>
      </>
    )}
  </tr>
);


  /*
  return (
    <tr className="border">
        <td className="border border-l-2 border-black px-4 py-2">{item.id}</td>
        <td className="border border-black px-4 py-2">{item.name}</td>
        <td className="border border-black px-4 py-2">{item.quantity}</td>
        <td className="border border-black px-4 py-2">{item.price}</td>
        <td className="px-4 py-2 flex justify-center">
          <button onClick={() => onUpdateItem(item.id)} className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded">
            Edit
          </button>
          <button onClick={() => onRemoveItem(item.id)} className="bg-red-400 hover:bg-red-600 text-white font-bold px-4 py-2 ml-2 rounded">
            Remove
          </button>
        </td>
      </tr>
  );
  */
}

export default Item;
