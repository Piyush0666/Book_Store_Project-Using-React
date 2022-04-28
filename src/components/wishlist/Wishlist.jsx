import React from 'react'
import FooterCopyrights from '../footer/Footer'
import BookHeader from '../header/Header';
import './wishlist.css';
import { useHistory } from "react-router-dom";
import { getWishlist } from '../../services/UserServices';
import WishlistComponent from './wishListComponent';

function Wishlist() {
    let history = useHistory()
    const [updateWishlist,setupdateWishlist] = React.useState(false);
    const [currentWishlist,setCurrentWishlist] = React.useState([]);
    React.useEffect(()=>{
        getWishlist().then((response)=>{           
            console.log(response)
            setCurrentWishlist(response.data.data)                        
            }).catch(err => {console.log(err)})
        },[updateWishlist]);

    const listentoWishlist=(data)=>{
        if(data == true){
            setupdateWishlist(true);
        }
    }
    
    const wishListTable=currentWishlist.map((x)=>(<WishlistComponent key={x.wishlistId} listentoWishlist={listentoWishlist} allwishlist={x} />))
        
    return (
        <div>
            <BookHeader/>
            <div className="wishlist">
                <div className="top">
                    <div className="home" onClick={()=>(history.push('/dashboard'))}> Home / </div>
                    <div className="part1">My Wishlist</div>
                </div>
                <div className="mid-container">
                    <h3>My Wishlist({wishListTable.length})</h3>
                </div>
                <div>{wishListTable}</div>
            </div>
            <FooterCopyrights/>
        </div>
    )
}

export default Wishlist


