"use client";
import styles from "./styles.module.css";
import Order from "@app/client/components/admincomponent/order/order";
import { orderData } from "@app/client/data/admindata/orderdata";
import { getOrders } from "@app/client/data/order.data";
import { useEffect, useState } from "react";

export default function Orders() {
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orders = await getOrders();
        console.log(orders)
        if (orders) {
          const newOrderData = orders.map((order) => ({
            id: order.id,
            customer_name: `${order.user?.firstName} ${order.user?.lastName}`,
            email: order.email,
            total_amount: order.totalPrice,
            products: order.orderItems,
            order_date: order.createdAt,
            status: order.paymentStatus
          }));
          setOrders(newOrderData);
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };
    
    fetchOrder();
  }, []);
  const [searchVal, setSearchVal] = useState("");

  function handleSearchClick() {
    if (searchVal === "") {
      setOrders(orderData);
      return;
    }
    const filterBySearch = orderData.filter((item) => {
      if (item.customer_name.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setOrders(filterBySearch);
  }

  const orders = Orders?.map((order) => (
    <Order
      key={order?.id}
      id={order?.id}
      delivery={order?.status}
      date={order?.order_date}
      product={order?.products?.length}
      total={order?.total_amount}
      fullname={order?.customer_name}
    />
  ));

  return (
    <div className="home">
      <h2 className="name_header">View Orders</h2>
      <div className={styles.users}>
        <div className="userheader_container">
          <div className="search-users">
            <label htmlFor="search">Search by Product :</label>
            <input
              name="search"
              onKeyDown={handleSearchClick}
              onChange={(e) => setSearchVal(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <div className="table">
          <div className="users_information_contatiner_ligh">
            <p className="small">Number</p>
            <p>Customer Name</p>
            <p>Product Ordered</p>
            <p>Date</p>
            <p className="small">Total Spending</p>
            <p>Status</p>
          </div>
          {orders}
        </div>
      </div>
    </div>
  );
}
