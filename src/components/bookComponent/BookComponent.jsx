import React, { useEffect, useState } from "react";
import star from "../../assets/starlogo.jpg";
import "./BookComponent.css";
import { useHistory } from "react-router-dom";

function BookComponent(props) {
  const {
    bookName,
    authorName,
    image,
    description,
    rating,
    reviewer,
    discountPrice,
    originalPrice,
    id,
  } = props;
  let allItems = JSON.parse(localStorage.getItem("items"));
  let history = useHistory();
  const [addedToBag, setAddedToBag] = useState(null);
  useEffect(() => {}, [allItems, addedToBag]);
  const addToBag = () => {
    //set item in local storage
    let myItem = allItems && allItems.filter((item) => item.id === id);
    if (myItem && myItem.length === 0) {
      setAddedToBag(false);
    } else {
      setAddedToBag(true);
    }
    let obj = {
      bookName,
      authorName,
      description,
      originalPrice,
      discountPrice,
      image,
      id,
    };
    if (allItems) {
      allItems.push(obj);
      localStorage.setItem("items", JSON.stringify(allItems));
    } else {
      let items = [];
      items.push({
        bookName,
        authorName,
        description,
        originalPrice,
        discountPrice,
        image,
        id,
      });
      localStorage.setItem("items", JSON.stringify(items));
    }
  };
  const addToWishlist = () => {};
  return (
    <div className="Bookcontainer">
      <div class="Imagepart">
        <img className="BookImg" src={image} />
      </div>
      <div className="Detailspart">
        <div className="bookName">{bookName}</div>
        <div className="authorname">{authorName}</div>
        <div className="options">
          <div className="ratings">
            <span className="rating">{rating}</span>
            <img src={star} className="starlogo" />
          </div>
          <span className="reviewer">({reviewer})</span>
        </div>
        <div className="price">
          <div className="discount">Rs. {discountPrice}</div>
          <div className="original">Rs. {originalPrice}</div>
        </div>
        <div className="actionButton">
          {addedToBag ? (
            <div className="addedToBag">Added to Bag</div>
          ) : (
            <>
              <button className="addToBag" onClick={addToBag}>
                Add to Bag
              </button>
              <button className="addToWishlist">Wishlist</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookComponent;
