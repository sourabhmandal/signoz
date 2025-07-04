import { TabRoutes } from 'components/RouteTab/types';
import ROUTES from 'constants/routes';
import ExplorerPage from 'container/MetricsExplorer/Explorer';
import SummaryPage from 'container/MetricsExplorer/Summary';
import { BarChart2, Compass, TowerControl } from 'lucide-react';
import SaveView from 'pages/SaveView';
import { PreferenceContextProvider } from 'providers/preferences/context/PreferenceContextProvider';

export const Summary: TabRoutes = {
	Component: SummaryPage,
	name: (
		<div className="tab-item">
			<BarChart2 size={16} /> Summary
		</div>
	),
	route: ROUTES.METRICS_EXPLORER,
	key: ROUTES.METRICS_EXPLORER,
};

export const Explorer: TabRoutes = {
	Component: (): JSX.Element => (
		<PreferenceContextProvider>
			<ExplorerPage />
		</PreferenceContextProvider>
	),
	name: (
		<div className="tab-item">
			<Compass size={16} /> Explorer
		</div>
	),
	route: ROUTES.METRICS_EXPLORER_EXPLORER,
	key: ROUTES.METRICS_EXPLORER_EXPLORER,
};

export const Views: TabRoutes = {
	Component: SaveView,
	name: (
		<div className="tab-item">
			<TowerControl size={16} /> Views
		</div>
	),
	route: ROUTES.METRICS_EXPLORER_VIEWS,
	key: ROUTES.METRICS_EXPLORER_VIEWS,
};
