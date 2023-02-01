import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { departmentUrl } from '../../Data/Data';
import Layout from '../Layout/Layout';

const Employee = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${departmentUrl}/GetEmployee`)
            .then(data => setData(data.data))
    }, [])
    console.log(data)

    return (
        <div>
            <div>
                <Layout>
                    <div className="container">
                        <div className='my-3 text-end '>
                            <Link to={"/Employee/create"} className="btn btn-primary">Add Employee</Link>
                        </div>
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Employee Name </th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Options </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((data, index) => <tr key={index}>
                                        <td> {index + 1} </td>
                                        <td> {data.name} </td>
                                        <td> {data.department.departmentName} </td>
                                        <td>
                                            <Link className="text-success" >
                                                <i className="bi bi-pencil-square"></i>
                                            </Link>
                                            <Link className="text-danger ms-3">
                                                <i className="bi bi-trash"></i>
                                                {/* to={`/department/delete/${data.id}`} */}
                                            </Link>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </Layout>
            </div>
        </div>
    );
};

export default Employee;