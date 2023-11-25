import React from "react";
import { useRef, useState } from "react";
import ConfirmModal from "./ConfirmModal";

function ItemInput({ onAddItem }) {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  function handleModal(){
    if(quantityRef.current.value >= 10){
      setShowModal(true);
    } else {
      handleSubmit();
    } 
  }

  function handleDecline() {
    setShowModal(false);
    quantityRef.current.value = "";
    quantityRef.current.focus();
  }

  //Add new item to the itemlist useState in app.jsx
  function handleSubmit() {
    setShowModal(false);
    if (nameRef.current.value && priceRef.current.value) {
      const newItem = {
        name: nameRef.current.value,
        quantity: quantityRef.current.value,
        price: priceRef.current.value,
      };
      onAddItem(newItem);
    }

    //Reset the input fields after submitting
    nameRef.current.value = "";
    quantityRef.current.value = "";
    priceRef.current.value = "";
  }

  return (
    <>
    {showModal && <ConfirmModal onConfirm={handleSubmit} onDecline={handleDecline} />}
      <div className="flex flex-col md:flex-row lg justify-evenly p-5">
        {/* 1st Line: name */}
        <div className="flex flex-col text-center">
          <label
            htmlFor="item-name"
            className="text-baby-500 text-sm font-bold mb-2 mt-2"
          >
            Name:
          </label>
          <input
            id="item-name"
            ref={nameRef}
            type="text"
            placeholder="Name"
            className="shadow w-4/5 mx-auto appearance-none border-2 border-navy-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* 2nd Line: quantity */}
        <div className="flex flex-col text-center">
          <label
            htmlFor="item-quantity"
            className="text-baby-500 text-sm font-bold mb-2 mt-2"
          >
            Quantity:
          </label>
          <input
            id="item-quantity"
            ref={quantityRef}
            type="number"
            min="0"
            placeholder="Quantity"
            className="shadow w-4/5 mx-auto appearance-none border-2 border-navy-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col text-center">
          <label
            htmlFor="item-price"
            className="text-baby-500 text-sm font-bold mb-2 mt-2"
          >
            Price:
          </label>
          <input
            id="item-price"
            ref={priceRef}
            type="number"
            min="0"
            placeholder="Price"
            className="shadow w-4/5 mx-auto appearance-none border-2 border-navy-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      {/* 3rd Line: Button */}
      <div className="flex justify-center mt-5">
        <button
          onClick={handleModal}
          className="bg-bluegreen-500 hover:bg-bluegreen-600 text-navy-600 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Add
        </button>
      </div>
    </>
  );
}

export default ItemInput;
