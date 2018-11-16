import { RouterStore } from 'mobx-react-router';
import { browserHistory as Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'mobx-react-router';

const routing = new RouterStore();
export const history = syncHistoryWithStore(Router, routing);

export default routing;
