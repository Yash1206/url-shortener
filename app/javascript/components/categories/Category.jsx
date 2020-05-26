import React, { Component } from "react";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      title: "",
      isEditing: false,
    };
  }

  componentDidMount() {
    this.setState({
      category: this.props.category,
      title: this.props.category.title,
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.state.category.id;
    const url = `/api/v1/categories/${id}`;
    const category = {
      title: this.state.title,
    };
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          category: response.category,
          title: response.category.title,
          isEditing: false,
        });
      });
  };

  render() {
    const { title } = this.state;
    return (
      <tr>
        {this.state.isEditing == true ? (
          <>
            <th>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                  />
                </div>
              </form>
            </th>
            <td>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-link"
              >
                Submit
              </button>
            </td>
            <td>
              <button onClick={this.handleEdit} className="btn btn-link">
                Cancel
              </button>
            </td>
          </>
        ) : (
          <>
            <th scope="row" style={{ cursor: "pointer" }}>
              {title}
            </th>
            <td>
              <button onClick={this.handleEdit} className="btn btn-link">
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => this.props.handleDelete(this.state.category.id)}
                className="btn btn-link"
              >
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}

export default Category;
