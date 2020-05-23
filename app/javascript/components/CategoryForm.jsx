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
    console.log(category, "jjjj");

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
            <label htmlFor="inputCategoryTitle">Add Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Title"
              value={this.state.categoryTitle}
              onChange={this.handleChange}
              name="categoryTitle"
            />
          </div>
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default CategoryForm;
