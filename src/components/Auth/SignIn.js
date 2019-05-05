import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Auth.css";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  setDataHandler = e => {
    this.setState({
      [e.target.type]: e.target.value
    });
  };

  loginHandler = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <section className="signin">
        <Container className="auth-container">
          <Row>
            <Col md="12">
              <h2 className="title">Zaloguj się</h2>
            </Col>

            <Col md="12">
              <Form onSubmit={this.loginHandler}>
                <Form.Control
                  onChange={this.setDataHandler}
                  className="text-center"
                  type="email"
                  placeholder="Adres email..."
                  required
                />
                <Form.Control
                  onChange={this.setDataHandler}
                  className="text-center"
                  type="password"
                  placeholder="Hasło..."
                  required
                />
                <Button type="submit" variant="success">
                  ZALOGUJ
                </Button>
                <div className="red-text text-center">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
