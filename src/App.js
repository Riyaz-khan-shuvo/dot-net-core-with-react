import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Employee from './Components/Employee/Employee';
import Department from './Components/Department/Department';
import EditDepartment from './Components/Department/EditDepartment';
import DeleteDepartment from './Components/Department/DeleteDepartment';
import CreateDepartment from './Components/Department/CreateDepartment';

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
      path: "/department",
      element: <Department />
    },
    {
      path: "/department/create",
      element: <CreateDepartment />
    },
    {
      path: "/department/edit/:dptId",
      element: <EditDepartment />
    },
    {
      path: "/department/delete/:dptId",
      element: <DeleteDepartment />
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
