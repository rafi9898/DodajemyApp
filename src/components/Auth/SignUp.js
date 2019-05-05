import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Auth.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  setDataHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  signUpHandler = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <section className="signup">
        <Container className="auth-container">
          <Row>
            <Col md="12">
              <h2 className="title">Zarejestruj się</h2>
            </Col>

            <Col md="12">
              <Form onSubmit={this.signUpHandler}>
                <Form.Control
                  onChange={this.setDataHandler}
                  className="text-center"
                  type="email"
                  id="email"
                  placeholder="Adres email..."
                  required
                />
                <Form.Control
                  onChange={this.setDataHandler}
                  className="text-center"
                  type="password"
                  id="password"
                  placeholder="Hasło..."
                  required
                />
                <Form.Control
                  onChange={this.setDataHandler}
                  className="text-center"
                  type="text"
                  id="firstName"
                  placeholder="Imię..."
                  required
                />
                <Form.Control
                  onChange={this.setDataHandler}
                  className="text-center"
                  type="text"
                  id="lastName"
                  placeholder="Nazwisko..."
                  required
                />
                <Button type="submit" variant="success">
                  ZAREJESTRUJ
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
