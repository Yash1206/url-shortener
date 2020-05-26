import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  handleResponse = (response) => {
    if (response.status == 200) {
      this.props.loadState();
    } else {
      response.json().then((err) => {
        this.setState({
          errors: err.errors,
        });
      });
    }
  };

  handleEdit = (category_id) => {
    const api = `/api/v1/urls/${this.props.url_id}`;
    const url = {
      category_id: category_id,
    };
    fetch(api, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    }).then((response) => this.handleResponse(response));
  };

  render() {
    const { categoryList } = this.props;
    return (
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {categoryList &&
          categoryList.map((category) => {
            return (
              <a
                style={{cursor: "pointer"}}
                key={category.id}
                onClick={() => this.handleEdit(category.id)}
                className="dropdown-item"
              >
                {category.title}
              </a>
            );
          })}
      </div>
    );
  }
}

export default Dropdown;
