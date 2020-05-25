import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";

class ManageCategories extends Component {
    render() {
        return (
            <div className="container">
                <CategoryForm />
                <h1 style={{padding: "2rem"}} className="d-flex justify-content-center">Category List</h1>
                <CategoryList />
            </div>
        )
    }
}

export default ManageCategories;
