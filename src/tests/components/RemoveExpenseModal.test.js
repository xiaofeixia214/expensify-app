import React from 'react';
import { shallow } from 'enzyme';
import RemoveExpenseModal from '../../components/RemoveExpenseModal';

let handleRemoveExpense, hanldeCancelRemoveExpense, wrapper;

beforeEach(() => {
	handleRemoveExpense = jest.fn();
	hanldeCancelRemoveExpense = jest.fn();
	wrapper = shallow(
		<RemoveExpenseModal 
			handleRemoveExpense={handleRemoveExpense}
			hanldeCancelRemoveExpense={hanldeCancelRemoveExpense}
		/>
	);
});

test('should render RemoveExpenseModal correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should call handleRemoveExpense when click yes button', () => {
	wrapper.find('button').first().simulate('click');
	expect(handleRemoveExpense).toHaveBeenCalled();
});

test('should call hanldeCancelRemoveExpense when click no button', () => {
	wrapper.find('button').at(1).simulate('click');
	expect(hanldeCancelRemoveExpense).toHaveBeenCalled();
});