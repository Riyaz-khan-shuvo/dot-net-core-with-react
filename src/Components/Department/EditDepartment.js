import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { departmentUrl } from '../../Data/Data';
import Layout from '../Layout/Layout';
import axios from 'axios';
const EditDepartment = () => {
    const { dptId } = useParams();

    const [data, setData] = useState({
        departmentName: ""
    });

    useEffect(() => {
        axios.get(`${departmentUrl}/id?id=${dptId}`)
            .then(data => setData(data.data))
    }, [dptId])

    const handleChange = e => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const history = useNavigate();

    const dptRef = useRef()

    const handleSubmit = (e) => {
        // fetch(`${departmentUrl}/${dptId}`)
        const departmentName = dptRef.current.value;
        const d = { id: dptId, departmentName }
        console.log(d)
        fetch(`${departmentUrl}/${dptId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(d)
        })
            .then(res => res.text())
            .then(success => {
                if (success === "") {
                    alert("Updated Successful!!!")
                }
                history("/department")

            })

        e.preventDefault();
    }
    console.log(data);

    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="col-md-4 offset-md-4">
                        <form onSubmit={(e) => handleSubmit(e)} className='mx-auto'>
                            <div class="mb-3">
                                <label for="" className='text-left form-label'>Department</label>
                                <input type="text" name='departmentName' value={data.departmentName} className="form-control" onChange={(e) => handleChange(e)} ref={dptRef} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default EditDepartment;