import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//mobx Store 적용
import { Provider } from 'mobx-react';
//store 적용
import RootStore from "./mul_Quiz/Store/RootStore";
//시멘틱 UI 적용
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Provider Store={RootStore}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
