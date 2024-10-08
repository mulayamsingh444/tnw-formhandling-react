import React, { useEffect, useState } from 'react'
import api from '../api';
import { Link } from 'react-router-dom';
import ViewModal from './ViewModal';

let myData = [];

(async ()=>{
const response = await api.getReq("contact-us");

myData = response;
})();

function Contacts() {
    const [contacts, setContacts] = useState(myData || []);

    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    useEffect(()=>{
      if(contacts.length == 0){
        console.log("contact.length", contacts.length == 0);
        api.getReq("contact-us")
        .then((data)=>{
        console.log("data", data)
        setContacts(data)
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
  
  api.deleteReq("contact-us", id)
  .then((data)=>{
  console.log("data", data)
  
  setContacts((preVal)=> preVal.filter((obj)=> obj?._id != id));
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
                <th className=' px-3 py-2 border-2 border-gray-500'>Message</th>
                <th className='px-3 py-2 border-2 border-gray-500'>Actions</th>
              </tr>
            </thead>
  
            <tbody>
              {contacts?.length > 0 && contacts.map((contact) => (
                <tr key={contact?.id} className='bg-white dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-3 py-2 border border-gray-500'>{contact?.name}</td>
                  <td className='px-3 py-2 border border-gray-500'>{contact?.email}</td>
                  <td className='px-3 py-2 border border-gray-500'>{contact?.phone}</td>
                  <td className='px-3 py-2 border border-gray-500'>{contact?.message}</td>
  
                  <td className='px-3 py-2 border border-gray-500'>
              

                        <button onClick={openModal} className='font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1'>
                      View
                        </button>

                        <ViewModal isVisible={isModalVisible} onClose={closeModal}>
                        <div className=' bg-gray-100 px-5 py-5 font-semibold'>
                        <h1>Name: {contact?.name}</h1>
                        <h2>Email: {contact?.email}</h2>
                        <h2>Phone: {contact?.phone}</h2>
                        <h2>Message: {contact?.message}</h2>
                        </div>
                        </ViewModal>
                        
                        <button onClick={() => handleDelete(contact?._id)} className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1'>
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

export default Contacts
