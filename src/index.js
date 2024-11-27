import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store'; // Adjust paths accordingly
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import App from './App';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    {/* PersistGate delays app rendering until persisted state has been retrieved */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
