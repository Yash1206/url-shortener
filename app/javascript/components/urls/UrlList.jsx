import React, { Component } from "react";
import SingleUrl from "./Url";

class UrlList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlList: [],
      categoryList: [],
    };
  }

  render() {
    const url_list = this.props.urlList;
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
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {url_list &&
                url_list.map((url) => (
                  <SingleUrl
                    url={url}
                    categoryList={this.props.categoryList}
                    key={url.id}
                    loadState={this.props.loadState}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default UrlList;
