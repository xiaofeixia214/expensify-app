import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selecctExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenExpenseCount }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const hiddenExpenseWord = hiddenExpenseCount == 1 ? 'expense' : 'expenses';
	const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h1>
				<h3 className="page-header__sub-title">{hiddenExpenseCount ? `Not showing ${hiddenExpenseCount} ${hiddenExpenseWord} because of filters.` : 'Showing all expenses. No filters in place'}</h3>
				<div className="page-header__actions">
					<Link className="button" to="/create">Add Expense</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selecctExpensesTotal(visibleExpenses),
		hiddenExpenseCount: state.expenses.length - visibleExpenses.length
	};
};

export default connect(mapStateToProps)(ExpensesSummary);