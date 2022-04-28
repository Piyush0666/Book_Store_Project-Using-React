import React from 'react'
import './Orders.css';

function OrderComponent(props) {
    return (
        <div className="wishlistContainer">
            <img className="BookImage" src={props.allorderlist.bookModel.image}/>
            <div className="orderDescription">
                <div className="bookName1">{props.allorderlist.bookModel.bookName}</div>   
                <div className="authorname1">{props.allorderlist.bookModel.authorName}</div>                                   
                <div className="price1">
                    <div className="discount1">Rs. {props.allorderlist.bookModel.discountPrice}</div>
                    <div className="original1">Rs. {props.allorderlist.bookModel.originalPrice}</div>
                </div> 
            </div>
            <div className="datecontainer">
                <div className="greenDot"></div>
                <div className="date">Order Placed on May 21</div>
            </div>
        </div>
    )
}

export default OrderComponent
