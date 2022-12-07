import React, { useState } from 'react';
import { Row, Col, Table } from 'antd';
import Data from '../../data.json'

const columns = [
  {
    title: "Name",
    dataIndex: "pName",
  },
  {
    title: "Contact",
    dataIndex: "pEContact",
  },
  {
    title: "Doctor",
    dataIndex: "pDoctor",
  },
  {
    title: "Diagonosis",
    dataIndex: "pDiagnosis",
  },
  {
    title: "Action",
    dataIndex: "",
  }
];
const data = [...Data];
data.map((value, index)=>{
     return (
       <tr>
         <td key={value.id}></td>
         <td>{value.pName}</td>
         <td>{value.pEContact}</td>
         <td>{value.pDoctor}</td>
         <td>{value.pDiagnosis}</td>
       </tr>
     );
})
const ViewPatient = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <Row gutter={[16]}>
            <Col span={24}>
                <h2 style={{
                    textAlign:'center',
                    margin:'2rem 0'
                }}>View Patient Details</h2>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </Col>
        </Row>
    );
};
export default ViewPatient;