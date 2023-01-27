
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
    }, [data])

    const handleDelete = (e, id) => {
        fetch(`${departmentUrl}/${id}`, {
            method: "DELETE"
        })
            .then(res => res.text())
            .then(result => {
                if (result === "") {
                    alert("Department deleted successful!!!")
                }
            })

    }

    return (
        <div>
            <Layout>
                <div className="container">
                    <div className='my-3 text-end '>
                        <Link to={"/department/create"} className="btn btn-primary">Add Department</Link>
                    </div>
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
                                data.map((data, index) => <tr key={index}>
                                    <th scope="row">{index + 1} </th>
                                    <td> {data.departmentName} </td>
                                    <td>
                                        <Link to={`/department/edit/${data.id}`} className="text-success" >
                                            <i className="bi bi-pencil-square"></i>
                                        </Link>
                                        <Link onClick={(e) => handleDelete(e, data.id)} className="text-danger ms-3">
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
    );
};

export default Department;