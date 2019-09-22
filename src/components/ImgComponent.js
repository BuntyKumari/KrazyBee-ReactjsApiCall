import React, { Component } from "react";

export default class ImgComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="card" style={{ padding: "10px", width: "14rem"}} >
          <img src={this.props.item.url} class="card-img-top" alt="." />
          <div class="card-body" style={{padding:"0px"}}>
            <p class="card-text">
            {this.props.item.title}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">id: {this.props.item.id}</small>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

