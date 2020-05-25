import React, { Component } from "react";

class CategoryForm extends Component {
  constructor() {
    super();
    this.state = {
      categoryTitle: "",
      errors: "",
    };
  }

  handleResponse = (response) => {
    if (response.status == 200) {
      this.props.loadCategories();
    } else {
      response.json().then((err) => {
        this.setState({
          errors: err.errors,
        });
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const category = {
      title: this.state.categoryTitle,
    };

    const url = "/api/v1/categories/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then((response) => {
      this.handleResponse(response);
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        {this.state.errors && <h1>{this.state.errors[0]}</h1>}
        <form>
          <div className="form-group">
            <h1 className="d-flex justify-content-center">Add Category</h1>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Title"
              value={this.state.categoryTitle}
              onChange={this.handleChange}
              name="categoryTitle"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn btn-secondary"
            >
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default CategoryForm;
