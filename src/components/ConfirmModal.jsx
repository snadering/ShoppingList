import React from 'react';

const ConfirmModal = ({ onConfirm, onDecline }) => {
  return (
    <div className="modal fixed inset-0 flex items-center justify-center">
      <div className="bg-grotto-500 border-2 border-navy-500 p-6 rounded shadow-lg">
        <p className="mb-4 text-baby-500">Are you sure this is the correct amount?</p>
        <div className="flex justify-center">
        <button
          className="bg-bluegreen-500 text-navy font-bold px-4 py-2 mr-2 rounded hover:bg-bluegreen-600"
          onClick={onConfirm}
          >
          Yes
        </button>
        <button
          className="bg-red-300 font-bold text-navy px-4 py-2 rounded hover:bg-red-400"
          onClick={onDecline}
          >
          No
        </button>
            </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
