import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../validation/validation";
import FormInput from "../components/FormInput";
import { mobile, captialize, age } from "../validation/normalize";
import { Button, Card, CardBody, Col, FormGroup } from "reactstrap";

const GeneralForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border" id="Gform">
          <CardBody >
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="FirstName"
                  type="text"
                  component={FormInput}
                  label="First Name"
                  inputPlaceHolder="Enter  FistName"
                  normalize={captialize}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="LastName"
                  type="text"
                  component={FormInput}
                  label="Last Name"
                  inputPlaceHolder="Enter  LastName"
                  normalize={captialize}
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="email"
                  type="email"
                  component={FormInput}
                  label="Email"
                  inputPlaceHolder="Enter Email"
                  normalize={captialize}
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="phone"
                  type="text"
                  component={FormInput}
                  label="Mobile No *"
                  inputPlaceHolder="+91"
                  normalize={mobile}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="password"
                  type="password"
                  component={FormInput}
                  label="Password"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="cpassword"
                  type="password"
                  component={FormInput}
                  label="Confirm password"
                />
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button
              color="primary"
              className="btn-pill pull-right"
              type="submit"
              style={{ marginRight: "20px" }}
            >
              Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(GeneralForm);
