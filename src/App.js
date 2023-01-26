import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Employee from './Components/Employee/Employee';
import Department from './Components/Department/Department';
import EditDepartment from './Components/Department/EditDepartment';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/Department",
      element: <Department />
    },
    {
      path: "/edit/:dptId",
      element: <EditDepartment />
    },
    {
      path: "/employee",
      element: <Employee />
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
