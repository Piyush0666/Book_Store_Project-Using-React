import React from 'react'
import FooterCopyrights from '../footer/Footer'
import BookHeader from '../header/Header'
import './OrderPlaced.css';
import order from '../../assets/orderplaced.png';
import { Table } from 'antd';
import { useHistory } from "react-router-dom";

function OrderPlaced() {
    let history=useHistory()
    const columns = [
        {
          title: 'Email us',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Contact us',
          dataIndex: 'contact',
          key: 'contact',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }]
        const data = [
            {
              key: '1',
              email: 'admin@bookstore.com',
              contact: '+91 9910936991',
              address: '573, 14th Floor, 15th Avenue, Sector 21D ,opp to Ryan School, near Paras restaurant, HSR Layout, Haryana 121001'
            }]
    return (
        <div>
            <BookHeader/>
            <div className="order">
                <img src={order} class="orderlogo"/>
                <div className="hurray">hurray!!! your order is confirmed </div>
                <div className="hurray">the order id is #123456 save the order id for</div> 
                <div className="hurray">further communication..</div>
                <br/>
                <Table className="table" columns={columns} dataSource={data} />
                <button className="continueShopping" onClick={()=>(history.push('/'))}>CONTINUE SHOPPING</button> 
            </div>
            <FooterCopyrights/>
        </div>
    )
}

export default OrderPlaced;
