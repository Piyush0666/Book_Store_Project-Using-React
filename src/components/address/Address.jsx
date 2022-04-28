import React from "react";
import "./Address.css";
import { Radio } from "antd";

function Address(props) {
  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const listenAddress = () => {
    props.listenAddressDetails(true);
  };

  const listenOrderSummery = () => {
    localStorage.setItem("AddressId", props.allAddressList.addressId);
    props.listenOrderSummery(false);
  };
  return (
    <div className="mainAddressContainer">
      <div className="userAddress">
        <h3 style={{ marginLeft: 29 }} onClick={listenAddress}>
          Customer Details
        </h3>
        <button className="logout">Add New Address</button>
      </div>
      <div className="personal">
        <div className="personal1">
          <h5 style={{ marginBottom: 1 }}>Full Name</h5>
          <div>{localStorage.getItem("Name")}</div>
        </div>
        <div className="personal1">
          <h5 style={{ marginBottom: 1 }}>Mobile Number</h5>
          <div>{localStorage.getItem("Number")}</div>
        </div>
      </div>
      <div className="personal2">
        <h5 style={{ marginBottom: 1 }}>Address</h5>
        <div style={{ width: 374, height: 80 }}>
          {props.allAddressList.address}
        </div>
      </div>
      <div className="personal">
        <div className="personal1">
          <h5 style={{ marginBottom: 1 }}>City/Town</h5>
          <div>{props.allAddressList.city}</div>
        </div>
        <div className="personal1">
          <h5 style={{ marginBottom: 1 }}>State</h5>
          <div>{props.allAddressList.state}</div>
        </div>
      </div>
      <div className="personal2">
        <h5 style={{ marginBottom: 1 }}>Type</h5>
      </div>
      <Radio.Group
        style={{ marginLeft: 42 }}
        onChange={onChange}
        value={props.allAddressList.typeId}
      >
        <Radio value={1}>Home</Radio>
        <Radio value={2}>Work</Radio>
        <Radio value={3}>Other</Radio>
      </Radio.Group>
      <button className="continueShopping1" onClick={listenOrderSummery}>
        Continue
      </button>
    </div>
  );
}

export default Address;
