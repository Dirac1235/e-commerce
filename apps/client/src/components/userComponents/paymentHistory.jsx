import { useState, useEffect } from 'react';

const PaymentHistory = ({ paymentData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPaymentMethod, setFilterPaymentMethod] = useState('');
  const [filteredPayments, setFilteredPayments] = useState(paymentData);

  useEffect(() => {
    filterPayments();
  }, [searchQuery, filterDate, filterStatus, filterPaymentMethod]);

  const filterPayments = () => {
    let filtered = paymentData;

    if (searchQuery) {
      filtered = filtered.filter(payment =>
        payment.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterDate) {
      filtered = filtered.filter(payment => payment.date === filterDate);
    }

    if (filterStatus) {
      filtered = filtered.filter(payment => payment.status === filterStatus);
    }

    if (filterPaymentMethod) {
      filtered = filtered.filter(payment => payment.paymentMethod === filterPaymentMethod);
    }

    setFilteredPayments(filtered);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Order History</h2>
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300  rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="border border-gray-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
        <select
          value={filterPaymentMethod}
          onChange={(e) => setFilterPaymentMethod(e.target.value)}
          className="border border-gray-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Orders</option>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank_transfer">Bank Transfer</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">ID</th>
              <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Payment Method</th>
              <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Total</th>
              <th className="py-3 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map(payment => (
              <tr key={payment.id} className="border-t border-gray-200">
                <td className="py-3 px-6">{payment.id}</td>
                <td className="py-3 px-6">{payment.paymentMethod}</td>
                <td className={`py-3 px-6 ${payment.status === 'completed' ? 'text-green-500' : payment.status === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>{payment.status}</td>
                <td className="py-3 px-6">{payment.total}</td>
                <td className="py-3 px-6">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default  PaymentHistory ;