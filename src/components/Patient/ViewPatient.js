import React, { useState } from 'react';
import { Row, Col, Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [];
for (let i = 0; i < 12; i++) {
    data.push({
        key: i,
        name: `Patient ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
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