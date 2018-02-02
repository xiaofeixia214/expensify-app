import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = (props) => (
	<Modal
		isOpen={props.showRemoveExpenseModal}
		contentLabel="Confirmation"
		closeTimeoutMS={100}
		className="modal"
	>
		<p className="modal__body">Do you want to delete this expense?</p>
		<div className="modal__button-bar">
			<button className="button" onClick={props.handleRemoveExpense}>Yes</button>
			<button className="button" onClick={props.hanldeCancelRemoveExpense}>No</button>
		</div>
	</Modal>
);

export default RemoveExpenseModal;