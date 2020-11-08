import { Suspense } from "react";
import AppRouter from "components/routers/AppRouter";

import './i18n';

import './styles.css'

function CalendarApp() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<AppRouter />
		</Suspense>
	);
}

export default CalendarApp;
