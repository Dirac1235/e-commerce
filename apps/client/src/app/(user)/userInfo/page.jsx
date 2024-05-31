"use client"
import PaymentHistory from '@app/client/components/userComponents/paymentHistory';
import { useState } from 'react';
const samplePaymentData = [
    { id: '1', paymentMethod: 'credit_card', status: 'completed', total: 100, date: '2023-05-21' },
    { id: '2', paymentMethod: 'paypal', status: 'pending', total: 50, date: '2023-05-22' },
    { id: '3', paymentMethod: 'bank_transfer', status: 'failed', total: 75, date: '2023-05-23' },
    // Add more sample payments here
  ];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personalInfo');

  const renderContent = () => {
    switch (activeTab) {
      case 'personalInfo':
        return (
          <div className=' container border h-screen'>
            <h1 className="text-xl font-semibold mb-4 mt-6">Acoount Information</h1>
            <h2 className="text-xl font-semibold mb-4 mt-8  text-gray-500">Personal Info.</h2>
            <div className='bg-gray-200 mt-8 flex justify-between rounded-md text-gray-500 p-5'>
            <p><strong>Frist Name:</strong> John</p>
            <p><strong>Last Name:</strong>  Doe </p>
            </div>
            <h1 className=' text-gray-500 mt-8 text-xl font-semibold'>Contact Info</h1>
            <div className='bg-gray-200 mt-8  justify-between rounded-md flex text-gray-500 p-5'>
            <p><strong> Phone Number:</strong> 987542</p>
            <p><strong>Email:</strong> sara@hdhgshdgh </p>
            </div>
            {/* Add more personal info here */}
          </div>
        );
      case 'orderHistory':
        return (
          <div>
         <PaymentHistory paymentData={samplePaymentData} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 flex min-h-screen">
      <aside className="w-1/3 p-4 bg-gray-200 m-8">
        <nav>
            <div className='flex bg-gray-600 rounded-lg p-4 text-white space-x-6'>
            <img src="/user (2).png" alt="user" className=" h-10 w-10" />
            <div>
            <h1>John Doe</h1>
              <h1> john.doe@example.com</h1>
              </div>
            </div>
          <ul>
            <li className=" mb-8 mt-8">
              <div
                className={`flex justify-between  w-full text-left p-4 rounded ${activeTab === 'personalInfo' ? 'bg-gray-400' : 'bg-gray-300'}`}
                onClick={() => setActiveTab('personalInfo')}
              >
                <img src="/user (2).png" alt="user" className=" h-10 w-10 " />
            <div>
            <h1 className='text-xl font-semibold'>Account Information</h1>
              <p>See your account information</p>
              </div>
              
              </div>
            </li>
            <li className="mb-2">
              <div
                className={`flex justify-between  w-full text-left p-4 rounded ${activeTab === 'orderHistory' ? 'bg-gray-400' : 'bg-gray-300'}`}
                onClick={() => setActiveTab('orderHistory')}
              >
                <img src="/like.png" alt="user" className=" h-10 w-10 " />
            <div>
            <h1 className='text-xl font-semibold'>Order & Payment History</h1>
              <p>See your past payment info</p>
              </div>
              
              </div>
              <div className="flex justify-center">
              <button className='bg-pink-950 text-white p-3 mt-8 rounded-md'>
                Logout
              </button>
              </div>
            </li>

          </ul>
        </nav>
      </aside>
      <main className="w-3/4 p-4 bg-white">
        {renderContent()}
      </main>
    </div>
  );
};

export default Profile;