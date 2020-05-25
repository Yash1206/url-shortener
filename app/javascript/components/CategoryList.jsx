import React, { Component } from "react";
import SingleCategory from "./SingleCategory";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: null,
    };
  }

  componentDidMount() {
    const url = "/api/v1/categories";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ categoryList: response });
      });
  }

  render() {
    const category_list = this.state.categoryList;
    return (
      <div className="table_container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {category_list &&
              category_list.map((category, index) => (
                <SingleCategory
                  category={category}
                  handleDelete={this.handleDelete}
                  key={index}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CategoryList;
