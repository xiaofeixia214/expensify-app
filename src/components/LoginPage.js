import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithGithub } from '../actions/auth';

export const LoginPage = ({ startLoginWithGoogle, startLoginWithGithub }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">Expensify</h1>
			<p>It's time to get your expenses under control.</p>
			<button className="button box-layout__button" onClick={startLoginWithGoogle}>Login with Goolge</button>
			<button className="button" onClick={startLoginWithGithub}>Login with GitHub</button>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
	startLoginWithGithub: () => dispatch(startLoginWithGithub())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);