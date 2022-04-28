import React from 'react'
import './Orders.css';
import FooterCopyrights from '../footer/Footer'
import BookHeader from '../header/Header';
import { useHistory } from "react-router-dom";
import OrderComponent from './OrderComponent';
import { getOrders } from '../../services/UserServices';


function Orders() {
    let history = useHistory();

    const [allOrders,setAllOrders] = React.useState([]);
    React.useEffect(()=>{
        getOrders().then((response)=>{           
            console.log(response)
            setAllOrders(response.data.data)                        
            }).catch(err => {console.log(err)})
        },[]);
    
    const orderTable=allOrders.map((x)=>(<OrderComponent key={x.orderId} allorderlist={x} />))

    return (
        <div>
            <BookHeader/>
            <div className="orders">
                <div className="top">
                    <div className="home" onClick={()=>(history.push('/dashboard'))}> Home / </div>
                    <div className="part1">My Orders</div>
                </div>
                <div>{orderTable}</div>
            </div>
            <FooterCopyrights/>
        </div>
    )
}

export default Orders
