import React from "react";
import { useState } from "react";
import { getById, update } from "../api/api";

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
  };

  const handleInputChange = (e, field) => {
    setEditedValues({
      ...editedValues,
      [field]: e.target.value,
    });
  };

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
      console.error("Error updating item:", error);
    }
  };

  const handleCancelClick = () => {
    setEditedValues({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    });
    setEditStatus(false);
  };

  return (
    <tr className="border border-black">
      <td className="border border-l-2 border-black px-4 py-2">{item.id}</td>
      {editStatus ? (
        <>
          <td className="border border-black px-4 py-2">
            <input
              type="text"
              value={editedValues.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </td>
          <td className="border border-black px-4 py-2">
            <input
              type="number"
              value={editedValues.quantity}
              onChange={(e) => handleInputChange(e, "quantity")}
            />
          </td>
          <td className="border border-black px-4 py-2">
            <input
              type="number"
              value={editedValues.price}
              onChange={(e) => handleInputChange(e, "price")}
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
          <td className="border border-black px-4 py-2">${item.price}</td>
          <td className="px-4 py-2 flex justify-center">
            <button
              onClick={handleEditClick}
              className="bg-bluegreen-500 hover:bg-bluegreen-600 text-white font-bold py-2 px-3 rounded"
            >
              <svg //edit icon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>

            <button
              onClick={() => onRemoveItem(item.id)}
              className="bg-red-300 hover:bg-red-400 text-white font-bold px-4 py-2 ml-2 rounded"
            >
              <svg //Remove icon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
