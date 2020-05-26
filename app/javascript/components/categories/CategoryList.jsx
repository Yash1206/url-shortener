import React, { Component } from "react";
import Category from "./Category";

class CategoryList extends Component {
  handleDelete = (id) => {
    const url = `/api/v1/categories/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((response) => {
        this.props.loadCategories();
      });
  };

  render() {
    let category_list = this.props.categoryList;
    return (
      <div style={{ paddingTop: "1rem" }} className="table_container">
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
              category_list.map((category) => (
                <Category
                  category={category}
                  handleDelete={this.handleDelete}
                  key={category.id}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CategoryList;
