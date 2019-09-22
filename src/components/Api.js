import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import "../components/index.css";
import CardImage from "../components/CardImage";



export default class Api extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/albums";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map(function(item, index) {
          return <ContentItem item={item} key={index} />;
        })}
      </div>
    );
  }
}

class ContentItem extends React.Component {
  render() {
    return (
      <Row style={{ margin: "20px" }}>
        <Col xs="12">
          <Card style={{ marginBottom: "50px" }}>
            <CardBody style={{ borderBottom: "2px solid grey" }}>
              <CardTitle>{this.props.item.title}</CardTitle>
              <CardSubtitle>
                id = {this.props.item.id} , userId = {this.props.item.userId}
              </CardSubtitle>
            </CardBody>

            <CardImage />
          </Card>
        </Col>
      </Row>
    );
  }
}
