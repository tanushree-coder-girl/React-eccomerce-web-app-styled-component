import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Checkout() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    shippingCity: "",
    shippingAddress1: "",
    shippingAddress2: "",
    billingAddress1: "",
    billingAddress2: "",
    billingCity: "",
    touched: {
      name: false,
      email: false,
      shippingAddress1: false,
    },
  });
  const navigate = useNavigate();

  const errors = {
    name: form.name.length === 0,
    email: form.email.length === 0,
    shippingAddress1: form.shippingAddress1.length === 0,
  };

  const disabled: any = Object.keys(errors).some(
    (key) => errors[key as keyof typeof errors]
  );

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (disabled) {
      return;
    }

    navigate("/orderConfirmation");
  };

  const handleBlur = (e: any) => {
    const { name } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        touched: { ...form.touched, [name]: true },
      };
    });
  };

  const showError = (field: any) => {
    // const hasError = errors[field as keyof typeof errors];
    // const shouldShow = form.touched[field as keyof typeof form.touched];
    // return hasError ? shouldShow : false;

    // shortand
    return errors[field as keyof typeof errors] ? form.touched : false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <CheckoutContainer>
        {/* Row1 */}
        <CheckoutTitle>Shopping Checkout</CheckoutTitle>

        {/* row4 */}
        <CheckoutHeader>
          <h4>Your Details</h4>
        </CheckoutHeader>

        {/* row5 */}
        <CheckoutHeaderLine />

        {/* row6 */}
        <CheckoutTable>
          <CheckoutFormLabel>Name *</CheckoutFormLabel>
          <CheckoutFormInput
            onChange={handleChange}
            placeholder="Enter your Name"
            type="text"
            name="name"
            onInvalid={() => showError("name")}
            onBlur={handleBlur}
          />
          <CheckoutFormLabel>Email *</CheckoutFormLabel>
          <CheckoutFormInput
            onChange={handleChange}
            placeholder="Enter your Email"
            type="email"
            name="email"
            onInvalid={() => showError("email")}
            onBlur={handleBlur}
          />
        </CheckoutTable>

        {/* row7 */}
        <CheckoutHeader>Address Details</CheckoutHeader>

        {/* row8 */}
        <CheckoutHeaderLine />

        {/* row9 */}
        <CheckoutTable>
          <CheckoutFormLabel>Copy to shipping</CheckoutFormLabel>
          <CheckoutFormCheckbox type="checkbox" />

          <CheckoutFormLabel> Billing Address</CheckoutFormLabel>
          <CheckoutAddress>
            <input
              onChange={handleChange}
              placeholder="Enter your line address 1"
              type="text"
              name="billingAddress1"
            />
            <input
              onChange={handleChange}
              placeholder="Enter your line address 2"
              type="text"
              name="billingAddress2"
            />
            <input
              onChange={handleChange}
              placeholder="Enter your line city"
              type="text"
              name="billingCity"
            />
          </CheckoutAddress>

          <CheckoutFormLabel> Shipping Address *</CheckoutFormLabel>
          <CheckoutAddress>
            <CheckoutFormInput
              onChange={handleChange}
              placeholder="Enter your Shipping address line 1"
              type="text"
              name="shippingAddress1"
              onInvalid={() => showError("shippingAddress1")}
              onBlur={handleBlur}
            />
            <input
              onChange={handleChange}
              placeholder="Enter your Shipping address line 2"
              type="text"
              name="shippingAddress2"
            />
            <input
              onChange={handleChange}
              placeholder="Enter your Shipping city"
              type="text"
              name="shippingCity"
            />
          </CheckoutAddress>
        </CheckoutTable>

        <CancelButton onClick={() => navigate("/basket")}>
          {" "}
          Cancel{" "}
        </CancelButton>
        <CheckOutButton disabled={disabled}>Confirm Order</CheckOutButton>
      </CheckoutContainer>
    </form>
  );
}

const CheckoutContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`;

const CheckoutTable = styled.div`
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
  grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
`;

const CheckoutHeader = styled.div`
  grid-column: 1 / span 3;
  padding-top: 20px;
`;

const CheckoutHeaderLine = styled.hr`
  grid-column: 1 / span 3;
  margin-bottom: 20px;
  border: 1px solid gray;
`;

const CheckoutTitle = styled.h2`
  grid-column: 1 / span 2;
  padding-bottom: 20px;
`;

const CheckoutFormLabel = styled.label`
  justify-self: end;
`;

const CheckoutFormInput = styled.input`
  // border-color: ${(props) => (props["onInvalid"] ? "red" : "black")};
  // border-width: ${(props) => (props["onInvalid"] ? "3px" : "1px")};

  ${(props) =>
    props["onInvalid"] &&
    `
    border-color: red;
    border-width: 3px;
    `};

  border-style: solid;
`;

const CheckoutFormCheckbox = styled.input`
  justify-self: start;
  margin-bottom: 20px;
  grid-column: 2 / span 3;
`;

const CheckoutAddress = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.25fr 025fr 0.25rfr 0.25fr;
  grid-row-gap: 10px;
`;

const CancelButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 1;
`;

const CheckOutButton = styled.button`
  border-radius: 8px;
  height: 40px;
  grid-column: 3;
`;
