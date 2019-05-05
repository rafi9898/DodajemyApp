import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

class Search extends Component {
  state = {
    postName: ""
  };

  findPostNameHandler = e => {
    this.setState({
      postName: e.target.value
    });

    this.props.currentName(e.target.value);
  };

  render() {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Control
              onChange={this.findPostNameHandler}
              className="text-center"
              value={this.state.postName}
              placeholder="Wyszukaj..."
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Search;
