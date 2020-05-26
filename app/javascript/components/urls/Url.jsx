import React, { Component } from "react";
import Pin from "./Pin";
import Dropdown from "./Dropdown";

class Url extends Component {
  constructor(props) {
    super(props);
  }

  findCategory = (category_id) => {
    let cat = this.props.categoryList.filter(
      (category) => category.id === category_id
    )[0];
    return cat && cat.title;
  };

  handleClick(id) {
    const api = `/api/v1/urls/${id}`;
    const url = {
      pinned: !this.props.url.pinned,
    };
    fetch(api, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    }).then(() => this.props.loadState());
  }

  handleDelete(id) {
    const api = `/api/v1/urls/${id}`;
    fetch(api, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => this.props.loadState());
  }
  render() {
    const { original, shortened, pinned, category_id, id } = this.props.url;
    return (
      <tr>
        <th
          className={pinned ? "bi bi-alert-triangle text-success" : ""}
          scope="row"
          style={{ cursor: "pointer" }}
          onClick={() => this.handleClick(id)}
        >
          <Pin />
        </th>
        <td>{original}</td>
        <td>https://short.is/{shortened}</td>
        <td>
          <div className="dropdown">
            {category_id ? (
              <button
                className="btn btn-link dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {this.findCategory(category_id)}
              </button>
            ) : (
              <button
                className="btn btn-link dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Choose category
              </button>
            )}
            <Dropdown
              url_id={id}
              categoryList={this.props.categoryList}
              loadState={this.props.loadState}
            />
          </div>
        </td>
        <td>
          <button
            onClick={() => this.handleDelete(id)}
            className="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Url;
