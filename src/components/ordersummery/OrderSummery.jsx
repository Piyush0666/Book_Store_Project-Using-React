import React from "react";
import "./OrderSummery.css";
import { useHistory } from "react-router-dom";
function OrderSummery(props) {
  let history = useHistory();
  const listencart = () => {
    props.listenOrderDetails(true);
  };

  const addOrder = () => {
    // let obj = {
    //   userId: parseInt(localStorage.getItem("userId")),
    //   addressId: parseInt(localStorage.getItem("AddressId")),
    //   bookId: props.allCartList.bookId,
    //   bookQuantity: props.count,
    // };
    // AddOrder(obj)
    //   .then((resp) => {
    //     console.log(resp);
    //     history.push("/orderplaced");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    history.push("/orderplaced");
    localStorage.removeItem("items");
  };

  return (
    <div
      className="Ordersummery"
      style={{
        border: "none !important",
      }}
    >
      {/* <div className="heading1">
        <h3 style={{ marginLeft: 29 }} onClick={listencart}>
          Order Summery
        </h3>
      </div> */}

      <div className="wishlistContainer1">
        <img className="BookImage" src={props.allCartList.image} />
        <div className="orderDescription1">
          <div className="bookName1">{props.allCartList.bookName}</div>
          <div className="authorname1">{props.allCartList.authorName}</div>
          <div className="price1">
            <div className="discount1">
              Rs. {props.allCartList.discountPrice}
            </div>
            <div className="original1">
              Rs. {props.allCartList.originalPrice}
            </div>
          </div>
        </div>
      </div>
      {/* <button className="continueShopping1" onClick={addOrder}>
        CHECKOUT
      </button> */}
    </div>
  );
}

export default OrderSummery;
