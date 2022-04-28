import React from "react";
import "./index.css";
import { Button } from "antd";
import { withRouter } from "react-router-dom";

const CustomStepper = (props) => {
  const { steps, current, setCurrent } = props;
  return (
    <>
      {steps.map((step, index) => {
        return (
          <div className="newAddressDetails">
            <div className="addressDetails-title">{step.title}</div>
            <div className="addressDetails-content">
              {current === index || current > index ? step.content : ""}
            </div>
            <div className="addressDetails-button">
              {current === index ? (
                <Button
                  type="primary"
                  onClick={() => {
                    if (index === steps.length - 1) {
                      props.history.push("/orderplaced");
                      localStorage.removeItem("items");
                    } else {
                      setCurrent(index + 1);
                    }
                  }}
                  style={{
                    backgroundColor: "#3371B5",
                    borderColor: "#3371B5",
                  }}
                >
                  {step.text}
                </Button>
              ) : null}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default withRouter(CustomStepper);
