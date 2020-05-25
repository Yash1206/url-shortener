import React, { Component } from "react";

class CategoryForm extends Component {
  constructor() {
    super();
    this.state = {
      categoryTitle: "",
    };
  }

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
    })
      .then((response) => console.log(response.json()))
      .catch((errors) => console.log(errors));
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
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
