import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";

class ManageCategories extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      errors: [],
    };
  }

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    const url = "/api/v1/categories";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ categoryList: response , errors: []});
      });
  };

  handleResponse = (response) => {
    if (response.status == 200) {
      this.loadCategories();
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
          <Link className="btn btn-link" to="/">
            Manage Urls
          </Link>
        </div>
        <h1
          style={{ padding: "2rem" }}
          className="d-flex justify-content-center"
        >
          Category List
        </h1>
        <CategoryForm
          state={this.state}
          loadCategories={this.loadCategories}
          handleResponse={this.handleResponse}
          errors
        />
        <CategoryList
          categoryList={this.state.categoryList}
          loadCategories={this.loadCategories}
        />
      </div>
    );
  }
}

export default ManageCategories;
