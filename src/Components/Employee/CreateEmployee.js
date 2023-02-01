import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { departmentUrl } from '../../Data/Data';
import Layout from '../Layout/Layout';

const CreateEmployee = () => {
    const [department, setDepartment] = useState([]);
    useEffect(() => {
        axios.get(`${departmentUrl}/GetDepartments`)
            .then(data => setDepartment(data.data))
    }, [])
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="col-md-4 offset-md-4">
                        <form className='mx-auto'>
                            <div className="mb-3">
                                <label className='text-left form-label'>Employee Name</label>
                                <input placeholder='Enter Department' type="text" name='departmentName' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <select className="form-select" >
                                    <option >Open this select menu</option>
                                    {
                                        department.map((data, index) => <option value={data.id} key={index}>
                                            {data.departmentName}
                                        </option>)
                                    }
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default CreateEmployee;