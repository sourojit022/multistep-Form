import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../validation/validation";
import FormInput from "../components/FormInput";

import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
} from "reactstrap";




const NomineeDetailsForm = (props) => {
  const { handleSubmit, pristine, previousPage, reset, submitting } = props;

  const reset1 = () => {
    window.localStorage.clear();
  };
  const alert1=()=>{
     alert("Submitted")
  }
  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
     
          <div
            style={{
              paddingBottom: 30,
            }}
            className="btnssss"
          >
            <Button
              color="primary"
              className="btn-pill pull-left"
              onClick={previousPage}
              style={{
                marginLeft: "20px",
              }}
            >
              <i className="fa fa-chevron-left" /> Previous{" "}
            </Button>{" "}
            <Button
              color="primary"
              className="btn-pill pull-left"
              onClick={() => {
                reset();
                reset1();
              }}
              style={{
                marginLeft: "20px",
              }}
            >
              <i className="fa fa-chevron-left" /> Reset{" "}
            </Button>{" "}
            <Button
              color="primary"
              className="btn-pill pull-right"
              type="submit"
              style={{
                marginRight: "20px",
                

              }}
              onClick={alert1}
              disabled={pristine || submitting}
            >
              Save <i className="fa fa-check" />
            </Button>{" "}
          </div>{" "}
       
      </Col>{" "}
    </form>
  );
};

NomineeDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(NomineeDetailsForm);
