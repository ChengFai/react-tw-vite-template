import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupStore } from '@/store/store.ts';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/index.tsx';
import '@/styles/index.css';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
