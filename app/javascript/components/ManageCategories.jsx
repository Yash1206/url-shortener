import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";

class ManageCategories extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: null,
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
        this.setState({ categoryList: response });
      });
  };

  render() {
    return (
      <div className="container">
        <CategoryForm loadCategories={this.loadCategories} />
        <h1
          style={{ padding: "2rem" }}
          className="d-flex justify-content-center"
        >
          Category List
        </h1>
        <CategoryList
          categoryList={this.state.categoryList}
          loadCategories={this.loadCategories}
        />
      </div>
    );
  }
}

export default ManageCategories;
