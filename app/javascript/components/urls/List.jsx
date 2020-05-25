import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pin from "./Pin";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    const url = "api/v1/urls";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response error.");
      })
      .then((response) => {
        this.setState({ list: response });
      });
  }

  handleClick(shortened, index) {
    const url = `/api/v1/urls/${shortened}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
      body: JSON.stringify({ url: { pinned: !this.state.list[index].pinned } }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ list: res.list }));
  }

  render() {
    const url_list = this.state.list && this.state.list;
    return (
      <>
        <div className="table_container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Pin</th>
                <th scope="col">Original</th>
                <th scope="col">Shortened</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {url_list &&
                url_list.map(({ original, id, shortened, pinned }, index) => (
                  <tr key={id}>
                    <th
                      className={
                        pinned ? "bi bi-alert-triangle text-success" : ""
                      }
                      scope="row"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.handleClick(shortened, index)}
                    >
                      <Pin />
                    </th>
                    <td>{original}</td>
                    <td>https://short.is/{shortened}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default List;
