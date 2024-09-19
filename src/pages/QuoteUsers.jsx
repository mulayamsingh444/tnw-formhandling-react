import React, { useEffect, useState } from 'react'
import api from '../api';
import { json, Link } from 'react-router-dom';
import ViewModal from './ViewModal';

let myData = [];

(async ()=>{
const response = await api.getReq("quote");

myData = response;
})();

function QuoteUsers() {
    const [quotes, setQuotes] = useState(myData || []);

    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    useEffect(()=>{

      if(quotes.length == 0){
        console.log("quotes.length", quotes.length == 0)
        api.getReq("quote")
        .then((data)=>{
        console.log("data", data)
        setQuotes(data)
        })
        .catch((error)=>{
        console.log("error", error)
        })
      }
 
  }, [])    
  
  
  const handleDelete = function(id){
  if(!confirm("Are you sure you want to delete this user ?")){
    return;
  }
  
  api.deleteReq("quote", id)
  .then((data)=>{
  console.log("data", data)
  
  setQuotes((preVal)=> preVal.filter((obj)=> obj?._id != id));
  })
  .catch((error)=>{
  console.log("error", error)
  })

  }
  
    return (
      <div className='overflow-auto pl-5 pt-5'>
          <table className='text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 mx-auto w-[90%]'>
            <thead className='text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
             
                <th className='px-3 py-2 border-2 border-gray-500'>Name</th>
                <th className='px-3 py-2 border-2 border-gray-500'>Email</th>
                <th className='px-3 py-2 border-2 border-gray-500'>Phone</th>
                <th className=' px-3 py-2 border-2 border-gray-500'>Destination</th>
                <th className='px-3 py-2 border-2 border-gray-500'>Message</th>
                <th className='px-3 py-2 border-2 border-gray-500'>Actions</th>
              </tr>
            </thead>
  
            <tbody>
              {quotes?.length > 0 && quotes.map((quote) => (
                <tr key={quote?.id} className='bg-white dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-3 py-2 border border-gray-500'>{quote?.name}</td>
                  <td className='px-3 py-2 border border-gray-500'>{quote?.email}</td>
                  <td className='px-3 py-2 border border-gray-500'>{quote?.phone}</td>
                  <td className=' px-3 py-2 border border-gray-500 '>{quote?.destination}</td>
                  <td className='px-3 py-2 border border-gray-500'>{quote?.message}</td>
  
                  <td className='px-3 py-2 border border-gray-500'>
                   
                  <button onClick={openModal} className='font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1'>
                      View
                        </button>

                        <ViewModal isVisible={isModalVisible} onClose={closeModal}>
                        <div className=' bg-gray-100 px-5 py-5 font-semibold'>
                        <h1>Name: {quote?.name}</h1>
                        <h2>Email: {quote?.email}</h2>
                        <h2>Phone: {quote?.phone}</h2>
                        <h2>Message: {quote?.message}</h2>
                        </div>
                        </ViewModal>
                        
                        <button onClick={() => handleDelete(quote?._id)} className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1'>
                          Delete
                        </button>
  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}

export default QuoteUsers
