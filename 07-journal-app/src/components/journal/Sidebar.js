import React from 'react';

import JournalEntries from './JournalEntries';
import { signOut } from 'actions/auth';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(signOut());
	};

	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="mt-4">
					<i className="far fa-moon" />
					<span>uahtlahuac</span>
				</h3>
				<button className="btn" onClick={handleLogout}>
					Logout
				</button>
			</div>

			<div className="journal__new-entry">
				<i className="far fa-calendar-plus fa-5x" />
				<p>New entry</p>
			</div>

			<JournalEntries />
		</aside>
	);
};

export default Sidebar;
