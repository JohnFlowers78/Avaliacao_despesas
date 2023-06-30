import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './components/pages/Error';
import CadastroDespesa from './components/pages/CadastroDespesa';
import ListarDespesa from './components/pages/ListarDespesa';


const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <CadastroDespesa /> 
      },
      {
        path: "/cadastrar",
        element: <CadastroDespesa />
      },
      {
        path: "/listar",
        element: <ListarDespesa />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
