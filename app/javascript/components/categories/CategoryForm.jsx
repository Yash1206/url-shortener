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
    }).then((response) => {
      this.setState({
        categoryTitle: "",
      });
      this.props.handleResponse(response);
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        {this.props.state.errors &&
          this.props.state.errors.map((error, i) => {
            return (
              <div style={{ paddingTop: "1rem" }} key={i}>
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <strong>{error}</strong>
                </div>
              </div>
            );
          })}
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Title"
              value={this.state.categoryTitle}
              onChange={this.handleChange}
              name="categoryTitle"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn btn-link justify-content-end"
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
