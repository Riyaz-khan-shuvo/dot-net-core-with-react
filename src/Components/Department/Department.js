import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { departmentUrl } from '../../Data/Data';
import Layout from '../Layout/Layout';

const Department = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`${departmentUrl}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);

    return (
        <div>
            <Layout>
                <div className="container">
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Department Name </th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((data, index) => <tr>
                                    <th scope="row">{index + 1} </th>
                                    <td> {data.departmentName} </td>
                                    <td>
                                        <Link to={`/department/edit/${data.id}`} className="text-success" >
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <Link to={`/department/delete/${data.id}`} className="text-danger ms-3">
                                            <i className="bi bi-trash"></i>
                                        </Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    );
};

export default Department;