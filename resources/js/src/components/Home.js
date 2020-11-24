import React from "react";
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";
import Pie from "./pieChart";
import api from "../api";
import { useEffect, useState } from "react";
// import ReactSvgPieChart from "react-svg-piechart"
import { PieChart } from "react-minimal-pie-chart";

export default function Home() {
    // const data = [
    //     {title: "Data 1", value: 100, color: "#22594e"},
    //     {title: "Data 2", value: 60, color: "#2f7d6d"},
    //     {title: "Data 3", value: 30, color: "#3da18d"},
    //     {title: "Data 4", value: 20, color: "#69c2b0"},
    //     {title: "Data 5", value: 10, color: "#a1d9ce"},
    //   ]
  

    const [expenses, setExpenses] = useState(null);
    const [categories, setCategories] = useState(null);

    const fetchExpenses = () => {
        api.getAllExpenses().then(res => {
            const result = res.data;
            console.log("RESULT: ", result);
            setExpenses(res.data.data);
        });
    };

    const fetchCategories = () => {
        api.getAllCategories().then(res => {
            const result = res.data;
            console.log("RESULT: ", result);
            setCategories(res.data.data);
        });
    };

    useEffect(() => {
        fetchExpenses();
        fetchCategories();
    }, []);

    const renderExpenses = () => {
        if (!expenses) {
            return (
                <tr>
                    <td colSpan="4">Loading ...</td>
                </tr>
            );
        }

        if (expenses.length === 0) {
            return (
                <tr>
                    <td colSpan="4">There is no expenses yet. Add one.</td>
                </tr>
            );
        }

        return expenses.map(expense => (
            <tr>
                <td>{expense.id}</td>
                <td>{expense.name}</td>
                <td>{expense.amount} $</td>
                <td>{expense.category_id}</td>
                <td>{expense.created_at}</td>
                <td>
                    <Link
                        className="btn btn-warning"
                        to={`/edit/${expense.id}`}
                    >
                        EDIT
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                            api.deleteExpense(expense.id)
                                .then(fetchExpenses)
                                .catch(err => {
                                    alert(
                                        "Failed to delete post with id :" +
                                            expense.id
                                    );
                                });
                        }}
                    >
                        DELETE
                    </button>
                </td>
            </tr>
        ));
    };

    const renderPie = () => {
        // return categories.map(c => [
        //     title : c.name,
        //     value : c.id,
        //     color : "#E38627"
        // ]);
    };


    const renderCategories = () => {
        if (!categories) {
            return (
                <tr>
                    <td colSpan="4">Loading ...</td>
                </tr>
            );
        }

        if (categories.length === 0) {
            return (
                <tr>
                    <td colSpan="4">There is no categories yet. Add one.</td>
                </tr>
            );
        }

        return categories.map(category => (
            <tr>
                <td>{category.name} </td>
                <td>{category.id}</td>
                <td>
                    <Link
                        className="btn btn-warning"
                        to={`/editc/${category.id}`}
                    >
                        EDIT
                    </Link>
                </td>
            </tr>
        ));
    };

    return (
        <AppContainer title="Your Daily Expenses">
            <Link to="/addc" className="btn btn-primary">
                Add Category
            </Link>
            <div className="table-responsive">
                <table className="table -table-striped mt-4">
                    <thead>
                        <tr>
                            <th> Category Name </th>
                            <th>ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>{renderCategories()}</tbody>
                </table>
            </div>

            <Link to="/add" className="btn btn-primary">
                Add Expense
            </Link>

            <div className="table-responsive">
                <table className="table -table-striped mt-4">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Expense Name</th>
                            <th>Expense Amount</th>
                            <th>Category ID</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>{renderExpenses()}</tbody>
                </table>
            </div>
            <div>
                {/* <ReactSvgPieChart
    data={data}
    // If you need expand on hover (or touch) effect
    expandOnHover
    // If you need custom behavior when sector is hovered (or touched)
    onSectorHover={(d, i, e) => {
      if (d) {
        console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
      } else {
        console.log("Mouse leave - Index:", i, "Event:", e)
      }
    }}
  /> */}

                <PieChart
                    data={[
                        { title: "One", value: 10, color: "#E38627"  },
                        { title: "Two", value: 15, color: "#C13C37" },
                        { title: "Three", value: 20, color: "#6A2135" }
                    ]}

                    
    

                    
                />
            </div>
        </AppContainer>
    );
}
