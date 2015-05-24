'use strict';

import React from 'react';
import Actions from './card/actions';

export default React.createClass({
	getDefaultProps () {
		return { issue: {} };
	},

	render () {
		const {issue} = this.props;

		return (
			<li className="oncourse-extension-issue-inline-card">
				<div className="oncourse-extension-issue-inline-card-title">
					{issue.title}
				</div>
				<div className="oncourse-extension-issue-inline-card-actions">
					<Actions issue={issue} />
				</div>
			</li>
		);
	}
});
