import React, { Component } from "react";
import UrlForm from "./UrlForm";
import { Link } from "react-router-dom";
import UrlList from "./UrlList";

class ManageUrls extends Component {
  constructor() {
    super();
    this.state = {
      urlList: [],
      categoryList: [],
      errors: [],
    };
  }

  componentDidMount() {
    this.loadState();
  }

  loadState = () => {
    this.loadUrls();
    this.loadCategories();
    this.setState({
      errors: [],
    });
  };

  loadUrls = () => {
    const url = "api/v1/urls";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response error.");
      })
      .then((response) => {
        this.setState({ urlList: response });
      });
  };

  loadCategories = () => {
    const category = "/api/v1/categories";
    fetch(category)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ categoryList: response });
      });
  };

  handleResponse = (response) => {
    if (response.status == 200) {
      this.loadState();
    } else {
      response.json().then((err) => {
        this.setState({
          errors: err.errors,
        });
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-end">
          <Link className="btn btn-link" to="/categories">
            Manage Categories
          </Link>
        </div>
        <h1
          style={{ padding: "1rem" }}
          className="d-flex justify-content-center"
        >
          Url List
        </h1>
        <UrlForm state={this.state} handleResponse={this.handleResponse} />
        <UrlList
          urlList={this.state.urlList}
          categoryList={this.state.categoryList}
          loadState={this.loadState}
        />
      </div>
    );
  }
}

export default ManageUrls;
