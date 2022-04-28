import React from "react";
import FooterCopyrights from "../footer/Footer";
import map from "../../assets/images (1).png";
import { useHistory } from "react-router-dom";
import "./Cart.css";
import Address from "../address/Address";
import OrderSummery from "../ordersummery/OrderSummery";
import CartComponent from "./CartComponent";
// import { GetCartDetails, GetAddressDetails } from "../../services/UserServices";
import BookHeader from "../header/Header";
import NewAddress from "../address/NewAddress";
import CustomStepper from "../mystepper";

function Cart() {
  let history = useHistory();
  const [switchContainers, setSwitchContainers] = React.useState(true);
  const [switchorders, setSwitchOrders] = React.useState(true);
  const [cartList, setCartList] = React.useState([]);
  const [addressList, setAddressList] = React.useState([]);
  const [listenCart, setListenCart] = React.useState(false);
  const [countOfBook, setCountOfBook] = React.useState(1);
  const [current, setCurrent] = React.useState(0);

  const listenAddress = () => {
    setSwitchContainers(false);
  };

  const listenBookCount = (data) => {
    console.log(data);
    setCountOfBook(data);
  };

  const listenAddressDetails = (data) => {
    if (data === true) {
      setSwitchContainers(true);
    }
  };

  React.useEffect(() => {
    setCartList(JSON.parse(localStorage.getItem("items")));
  }, []);

  console.log(cartList);
  const listenOrder = () => {
    setSwitchOrders(false);
  };

  const listenOrderSummery = (data) => {
    if (data === false) {
      setSwitchOrders(false);
    }
  };

  const listenOrderDetails = (data) => {
    if (data === true) {
      setSwitchOrders(true);
    }
  };

  const listenToCart = (data) => {
    if (data === true) {
      setListenCart(true);
    }
  };

  //   React.useEffect(() => {
  //     GetCartDetails()
  //       .then((response) => {
  //         console.log(response.data.data);
  //         setCartList(response.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [listenCart]);

  //   const cartTable = cartList.map((x) => (
  //     <CartComponent
  //       key={x.cartID}
  //       allCartList={x}
  //       listenBookCount={listenBookCount}
  //       listenToCart={listenToCart}
  //     />
  //   ));
  const addressTable = <NewAddress />;

  const summeryTable = cartList.map((x) => (
    <OrderSummery
      key={x.id}
      allCartList={x}
      count={countOfBook}
      listenOrderDetails={listenOrderDetails}
    />
  ));

  const mySteps = [
    {
      title: "My Cart",
      content: (
        <div className="cartDiv">
          {cartList.length > 0 &&
            cartList.map((x) => <CartComponent key={x.id} allCartList={x} />)}
        </div>
      ),
      text: "PLACE ORDER",
    },
    {
      title: "Customer Details",
      content: <div className="addressDiv">{addressTable}</div>,
      text: "CONTINUE",
    },
    {
      title: "Order Summery",
      content: <div className="summeryDiv">{summeryTable}</div>,
      text: "CHECKOUT",
    },
  ];
  console.log(cartList);
  return (
    <div>
      <BookHeader />
      <div className="orders" style={{marginTop:'4rem'}}>
        <div className="top">
          <div className="home" onClick={() => history.push("/dashboard")}>
            {" "}
            Home /{" "}
          </div>
          <div className="part1">My Order</div>
        </div>

        <CustomStepper
          steps={mySteps}
          current={current}
          setCurrent={setCurrent}
        />
        {/* <div className="addressDetails">
          {switchContainers ? (
            <h4 id="summery" onClick={listenAddress}>
              Address Details
            </h4>
          ) : (
            <div>{addressTable}</div>
          )}
        </div>
        <div className="addressDetails">
          {switchorders ? (
            <h4 id="summery" onClick={listenOrder}>
              Order summery
            </h4>
          ) : (
            <div>{summeryTable}</div>
          )}
        </div> */}
      </div>
      <FooterCopyrights />
    </div>
  );
}

export default Cart;
