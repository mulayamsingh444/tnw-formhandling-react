import React from 'react'

function ViewModal({isVisible, onClose, children}) {

  return (
   isVisible?

    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="modal-content">{children}</div>
    </div>
  </div>

  : 

  null
  )
}

export default ViewModal
