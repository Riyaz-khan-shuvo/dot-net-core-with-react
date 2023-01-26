import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';

const DeleteDepartment = () => {
    const { dptId } = useParams()
    console.log(dptId);
    return (
        <div>
            <Layout>
                <h1>This is Delete Page : {dptId} </h1>
            </Layout>
        </div>
    );
};

export default DeleteDepartment;