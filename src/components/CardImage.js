import React, { Component, Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.css";
import giphy from "../assets/giphy.gif";

const ImgComponent = lazy(() => import("../components/ImgComponent"));

export default class CardImage extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos?albumId=1";
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
      <div style={{ display: "-webkit-inline-box", overflowX: "scroll" }}>
        {data.map(function(item, index) {
          return (
            <Suspense
              fallback={
                <div>
                  <img src={giphy} alt="loading..." />
                </div>
              }
            >
              <ImgComponent item={item} key={index} />
            </Suspense>
          );
        })}
      </div>
    );
  }
}
