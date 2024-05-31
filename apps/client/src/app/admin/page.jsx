"use client";

import React, { useEffect, useState } from "react";
// import OrdersBarChart from "@app/client/components/admincomponent/chart/BarChart";
import OrdersCategoryPieChart from "@app/client/components/admincomponent/chart/piechrt";
import ChartComponent from "@app/client/components/admincomponent/chart/lineChart";
import { orderData } from "@app/client/data/admindata/orderdata";
import { UserData } from "@app/client/data/admindata/userdata";
import Total from "@app/client/components/admincomponent/total/total";
import { useGlobalState } from "@app/client/data/globalState";
import OrderRecent from "@app/client/components/admincomponent/recentorder/orderRecent";

export default function page() {
  const productData = useGlobalState((state) => state.products);

  const [total_sale, setTotal_sale] = useState(0);
  useEffect(() => {
    const total = orderData.reduce((acc, order) => acc + order.total_amount, 0);
    setTotal_sale(total);
  }, []);
  const recent_orders = orderData.slice(0, 5).map((order) => {
    return (
      <OrderRecent
        email={order.email}
        customer_name={order.customer_name}
        order_id={order.id}
        total_amount={order.total_amount}
        order_date={order.order_date}
        status={order.status}
      />
    );
  });

  return (
    <div className="home">
      <h2 className="name_header">Dashboard</h2>
      <div className="home_info">
        <div className="home_container_center">
          <div className="totals">
            <Total total={total_sale.toFixed(2)} img="sale.svg" type="Sale" />
            <Total
              total={productData.length}
              img="revenu.svg"
              type="Products"
            />
            <Total total={1000} img="profit.svg" type="Profit" />
            <Total total={UserData.length} img="user.svg" type="Users" />
          </div>
          <div className="bar_pie_container">
            {/* <div className='barchart'>
              <OrdersBarChart   orders={orderData}/>
            </div>
              */}
            <div className="piechart">
              <OrdersCategoryPieChart orderData={orderData} />
            </div>
            <div className="linechart">
              <ChartComponent userData={UserData} />
            </div>
          </div>
        </div>
        <div className="recent_orderss">
          <div className="recent_title">Recent Orders</div>
          <div className="recent_order">
            <div>Order ID</div>
            <div>Customer Name</div>
            <div>Email</div>
            <div>Order Date</div>
            <div>Order Status</div>
            <div>Total Price</div>
          </div>
          {recent_orders}
        </div>
      </div>
    </div>
  );
}
