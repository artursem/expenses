import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [showForm, setShowForm] = useState("no");

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	const addExpenseHandler = () => {
		setShowForm("yes");
	};
	
	const hideExpenseHandler = () => {
		setShowForm("no");
	};

	if (showForm === "no") {
		return (
			<div className="new-expense">
				<button onClick={addExpenseHandler}>Add Expense</button>
			</div>
		);
	}
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideExpenseHandler} />
		</div>
	);
};

export default NewExpense;
