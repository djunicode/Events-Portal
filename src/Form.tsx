import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";


export default function FormComponent() {
  const [reviews, setReviews] = useState("");
  const onChange = (e: any) => {
    setReviews(e.target.value);
  };
  const onSubmit = (e: any) => {
    console.log("Form Submitted");
  };

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit}>
        <Input
          className="reviews-form"
          type="text"
          placeholder="enter you reviews"
          value={reviews}
          onChange={onChange}
        />
        <Button type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
}