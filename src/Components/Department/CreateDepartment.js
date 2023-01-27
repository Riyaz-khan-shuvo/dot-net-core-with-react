import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { departmentUrl } from '../../Data/Data';
import Layout from '../Layout/Layout';

const CreateDepartment = () => {
    const [data, setData] = useState({
        departmentName: ""
    });
    const history = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const departmentRef = useRef();
    const handleSubmit = (e) => {
        const departmentName = departmentRef.current.value;
        const department = { departmentName }
        console.log(department);
        axios.post(`${departmentUrl}`, department)
            .then(res => {
                if (res.data.id) {
                    alert("Department added successful!!!");
                    history("/department")
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="col-md-4 offset-md-4">
                        <form onSubmit={(e) => handleSubmit(e)} className='mx-auto'>
                            <div class="mb-3">
                                <label for="" className='text-left form-label'>Department</label>
                                <input ref={departmentRef} placeholder='Enter Department' type="text" name='departmentName' className="form-control" onChange={(e) => handleChange(e)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default CreateDepartment;