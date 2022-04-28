import React from "react";
import "./Cart.css";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { removeFromCart } from "../../services/UserServices";

function CartComponent(props) {
  const [bookCount, setBookCount] = React.useState(1);
  
  const IncrementCount = () => {
    setBookCount(bookCount + 1);
    props.listenBookCount(bookCount + 1);
  };
  const DecrementCount = () => {
    if (bookCount <= 0) {
      setBookCount(1);
      props.listenBookCount(bookCount);
    } else {
      setBookCount(bookCount - 1);
      props.listenBookCount(bookCount - 1);
    }
  };

  const removeCartDetails = () => {
    localStorage.setItem("CartId", props.allCartList.cartID);
    removeFromCart()
      .then((response) => {
        console.log(response);
        props.listenToCart(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="wishlistContainer1">
      <img className="BookImage" src={props.allCartList.image} />
      <div className="orderDescription1">
        <div className="bookName1">{props.allCartList.bookName}</div>
        <div className="authorname1">{props.allCartList.authorName}</div>
        <div className="price1">
          <div className="discount1">Rs. {props.allCartList.discountPrice}</div>
          <div className="original1">Rs. {props.allCartList.originalPrice}</div>
        </div>
        <div className="quantity">
          <MinusCircleOutlined
            onClick={DecrementCount}
            style={{ color: "grey" }}
          />
          <div className="one">{bookCount}</div>
          <PlusCircleOutlined
            onClick={IncrementCount}
            style={{ color: "grey" }}
          />
          <div
            style={{ fontSize: 10, marginLeft: 14 }}
            onClick={removeCartDetails}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
