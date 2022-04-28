import React from 'react';
import './wishlist.css';
import { DeleteOutlined } from '@ant-design/icons';
import { removeFromWishlist } from '../../services/UserServices';


function WishlistComponent(props) {

    const removeWish=() =>{
        localStorage.setItem("WishId",props.allwishlist.wishlistId);
        removeFromWishlist().then((resp) => {
            console.log(resp) 
            props.listentoWishlist (true)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <div>
            <div className="wishlistContainer" key={props.allwishlist.wishlistId}>
            <img className="BookImage" src={props.allwishlist.book.image}/>
            <div className="allDescription">
                <div className="bookName1">{props.allwishlist.book.bookName}</div>   
                <div className="authorname1">{props.allwishlist.book.authorName}</div>                                   
                <div className="price1">
                    <div className="discount1">Rs. {props.allwishlist.book.discountPrice}</div>
                    <div className="original1">Rs. {props.allwishlist.book.originalPrice}</div>
                </div> 
            </div>
            <DeleteOutlined onClick={removeWish} style={{color:'#a39f9f'}}/>                    
            </div>
        </div>
    )
}

export default WishlistComponent
