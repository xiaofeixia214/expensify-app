import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage 
			startEditExpense={startEditExpense} 
			startRemoveExpense={startRemoveExpense} 
			history={history} 
			expense={expenses[2]} 
		/>);
});

test('should render EditExpensePage', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should set showRemoveExpenseModal when click remove expense button', () => {
	wrapper.find('button').simulate('click');
	expect(wrapper.state('showRemoveExpenseModal')).toBe(true);
});

test('should hanlde startRemoveExpense', () => {
	wrapper.find('RemoveExpenseModal').prop('handleRemoveExpense')();
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({
		id: expenses[2].id
	});
});

test('should hanlde cancel remove expense', () => {
	wrapper.find('RemoveExpenseModal').prop('hanldeCancelRemoveExpense')();
	expect(wrapper.state('showRemoveExpenseModal')).toBe(false);
});
