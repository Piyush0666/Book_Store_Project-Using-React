import React from "react";
import "./Address.css";
import { Radio, Input } from "antd";

function NewAddress() {
  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="mainAddressContainer">
      <h3 style={{ marginLeft: 29 }}>Customer Details</h3>
      <div className="personal2">
        <h5 style={{ marginBottom: 1 }}>Address</h5>
        <Input style={{ width: 374, height: 80 }}></Input>
      </div>
      <div className="personal">
        <div className="personal1">
          <h5 style={{ marginBottom: 1 }}>City</h5>
          <Input></Input>
        </div>
        <div className="personal1">
          <h5 style={{ marginBottom: 1 }}>Town</h5>
          <Input></Input>
        </div>
      </div>
      <div className="personal2">
        <h5 style={{ marginBottom: 1 }}>Type</h5>
      </div>
      <Radio.Group style={{ marginLeft: 42 }} onChange={onChange} value={value}>
        <Radio value={1}>Home</Radio>
        <Radio value={2}>Work</Radio>
        <Radio value={3}>Other</Radio>
      </Radio.Group>
    </div>
  );
}

export default NewAddress;
