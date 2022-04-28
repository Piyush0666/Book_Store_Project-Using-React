import React from 'react'
import { useHistory } from "react-router-dom";
import './BookDescription.css';
import { getBookById,Addtocart,AddtoWishlist ,retrieveFeedbacks,addFeedbacks} from '../../services/UserServices';
import Rating from '@mui/material/Rating';

function BookDescription() {
    let history = useHistory();

    const [currentBook,setcurrentBook] = React.useState([]);
    const [feedbacks,setFeedbacks] = React.useState([]);
    const [addFeedbacksObj,setAddFeedbacksObj] = React.useState({userId:parseInt(localStorage.getItem("userId")),
                bookId:parseInt(localStorage.getItem("BookId")),comments:"",ratings:0});
    const [value, setValue] = React.useState(2);

    const takeComments=(e)=>{
        setAddFeedbacksObj({...addFeedbacksObj,comments:e.target.value})
    }

    React.useEffect(()=>{
            getBookById().then((response)=>{
                setcurrentBook(response.data.data)
                GetFeedbacks();
            }).catch(err => {console.log(err)})
        },[]);
    
    const cart =() =>{
        let obj = {
            userId: parseInt(localStorage.getItem("userId")),
            bookId: currentBook.bookId
            }
            Addtocart(obj).then((response)=>{
                console.log(response);
                alert("Book added to cart");
            }).catch(err => {
                console.log(err);
            })
    }

    const wishlist =() =>{
        let obj = {
            userId: parseInt(localStorage.getItem("userId")),
            bookId: currentBook.bookId
            }
            AddtoWishlist(obj).then((response)=>{
                console.log(response);
                alert("Book added to wishlist");
            }).catch(err => {
                console.log(err);
            })
    }

    const GetFeedbacks =() =>{        
            retrieveFeedbacks().then((response)=>{
                    console.log(response);
                    setFeedbacks(response.data.data)              
            }).catch(err => {
                console.log(err);
            })
    }

    const addFeedback=() =>{        
        addFeedbacks(addFeedbacksObj).then((response)=>{
            console.log(response);
            GetFeedbacks();
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div className="MainHeader">
      
        <p className="paths">
            <button className = "gotohome" onClick={()=>(history.push('/dashboard'))}> Home / </button><span id="pathtobook">Book</span>
        </p>

        <div className="imagebox">
            <img src={currentBook.image} alt="Image" className = "booklogo3" />
        </div>
        <div className="tagbuttons">          
            <button id="addtobag" onClick={cart}>ADD TO BAG</button>       
            <button id="wishlist" onClick={wishlist}> WISHLIST</button>        
        </div>
        <div className = "description">
             <div className="detailsofbook">
                <p id="booktitle">{currentBook.bookName}</p>
                <p id ="authorbook">{currentBook.authorName}</p>
                <div className="ratingbox">
                    <span>{currentBook.rating}★</span>
             </div>
             <span className="countreviewbook">({currentBook.reviewer})</span>
             <span className="bookprice">Rs. {currentBook.discountPrice}</span> 
             <span className="originalprice"><s>Rs. {currentBook.originalPrice}</s></span>
             <hr className="borderline"></hr>
             <div className="descriptionofbookdetails">
             <ul id="caption"><li>Book Detail</li></ul>
             <p id="Bookparagraph">{currentBook.bookDescription}</p>
             <hr className="borderline"></hr> 
        </div>

        <div className="feedback">
            <div className="feedback-title">
                <p className="para-for-custfeedback">Customer Feedback</p>
            </div>
            <div className="rating-pad">
            <div className="overallrating">
            <p className="para-for-overallrating"> Overall rating</p>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    setAddFeedbacksObj({...addFeedbacksObj,ratings:newValue})                    
                }}
            />
            <div className="writereview">
                <input className="input-for-review" type="text" placeholder="Write your review" onChange={takeComments}/> 
                <div className="submitbutton" onClick={addFeedback}>Submit</div>
            </div>
        </div>
        
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default BookDescription
