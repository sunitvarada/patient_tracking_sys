import React, { useState } from 'react';
import '../../App.css'
import { Card, Col, Row, Form ,Button, Input, InputNumber, Select, Radio } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { TextArea } = Input;


/* form validation error message */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};


const AddPatient = () => {
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <div>
            <div className="site-card-wrapper">
                <Row gutter={[16, 16]} style={{
                    position:'relative',
                    display:'flex',
                    flexDirection:'row',
                    width:'100%'
                }}>
                    <Card title="Add Patient" bordered={true} style={{
                        margin:'0 0 0 0.7rem'
                    }}>
                        <Form onFinish={onFinish} validateMessages={validateMessages}>
                            <Row gutter={[16,16]}>
                                <Col span={12}>
                                {/*Patient Name*/}
                                <Form.Item label="Name" required>
                                    <Input  placeholder="Enter Patient Name" id="pName"  />
                                </Form.Item>

                                {/*Patient Age, Gender, Contact, Emergency Contact*/}
                                <Row gutter={[16,16]}>
                                    <Col span={12}>
                                        <Form.Item label="Contact" required>
                                            <Input
                                                id="pContact"
                                                type="tel"
                                            />
                                        </Form.Item>
                                        <Form.Item label={`Gender`} required>
                                            <Select
                                                id="pGender"
                                                defaultValue="--Select--"
                                                options={[
                                                    {
                                                        value: 'Male',
                                                        label: 'Male',
                                                    },
                                                    {
                                                        value: 'Female',
                                                        label: 'Female',
                                                    },
                                                    {
                                                        value: 'Other',
                                                        label: 'other',
                                                    }
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Emergency Contact" required>
                                            <Input
                                                id="pEContact"
                                                type="tel"
                                            />
                                        </Form.Item>
                                        <Form.Item label={`Age`} required>
                                            <InputNumber id="pAge"
                                            placeholder={`Enter Age`}
                                            style={{
                                                width:'100%'
                                            }}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            {/*    End of Age Gender Contact Emergency Contact*/}
                                {/*Patient Address*/}
                                <Form.Item label="Address" required>
                                    <Input  placeholder="Enter Patient Address" id="pAddress"  />
                                </Form.Item>

                                {/*Patient City State District ZipCode */}
                                <Row gutter={[16,16]}>
                                    <Col span={12}>
                                        <Form.Item label={`City`} required>
                                            <Input
                                                id="pCity"
                                                placeholder={`City`}
                                            />
                                        </Form.Item>
                                        <Form.Item label={`State`} required>
                                            <Input
                                                id="pState"
                                                placeholder={`State`}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="District" required>
                                            <Input
                                                id="pDistrict"
                                                placeholder={`District`}
                                                type="text"
                                            />
                                        </Form.Item>
                                        <Form.Item label="Zip Code" required>
                                            <Input
                                                id="pZipcode"
                                                placeholder={`Zipcode`}
                                                type="text"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                {/*    End of City State District ZipCode */}

                            </Col>
                                <Col span={12}>
                                {/*Patient Temp BP Height Weight */}
                                <Row gutter={[16,16]}>
                                    <Col span={12}>
                                        <Form.Item label={`Temperature`} required>
                                            <Input
                                                id="pTemperature"
                                                placeholder={`Temperature`}
                                            />
                                        </Form.Item>
                                        <Form.Item label={`Blood Pressure`} required>
                                            <Input
                                                id="pBloodPressure"
                                                placeholder={`Blood Pressure`}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Height" required>
                                            <Input
                                                id="pHeight"
                                                placeholder={`Height`}
                                                type="text"
                                            />
                                        </Form.Item>
                                        <Form.Item label="Weight" required>
                                            <Input
                                                id="pWeight"
                                                placeholder={`Weight`}
                                                type="text"
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                {/*    End of Temp BP Heigth Weight */}
                                {/* Consultant Doctor*/}
                                <Form.Item label={`Consultant Doctor`} required>
                                    <Select
                                        id="pDoctor"
                                        defaultValue="--Select--"
                                        options={[
                                            {
                                                value: 'Dr. Ramesh',
                                                label: 'Dr. Ramesh',
                                            },
                                            {
                                                value: 'Dr. Suresh',
                                                label: 'Dr. Suresh',
                                            },
                                            {
                                                value: 'Dr. Kamesh',
                                                label: 'Dr. Kamesh',
                                            }
                                        ]}
                                    />
                                </Form.Item>

                                {/*  Doctor Diagnosis  */}
                                <Form.Item label={`Diagnosis`} required>
                                    <TextArea
                                        placeholder="Diagnosis"
                                        autoSize={{
                                            minRows: 3,
                                            maxRows: 5,
                                        }}
                                    />
                                </Form.Item>
                                {/*  Mode of Payment  */}
                                <Form.Item label={`Mode of Payment`} required>
                                    <Radio.Group >
                                        <Radio value={`Cash`}>Cash</Radio>
                                        <Radio value={`Card`}>Card</Radio>
                                        <Radio value={`Insurance`}>Insurance</Radio>
                                        <Radio value={`UPI`}>UPI</Radio>
                                    </Radio.Group>
                                </Form.Item>

                            </Col>
                                <Button htmlType="reset" style={{
                                    position:'relative',
                                    backgroundColor: '#f2120d',
                                    color:'white',
                                    margin:'0 auto'
                                }}>Reset</Button>
                                <Button htmlType="submit" style={{
                                    position:'relative',
                                    backgroundColor: '#2837d7',
                                    color:'white',
                                    margin:'0 auto'
                                }}>Add Patient Details</Button>
                            </Row>
                        </Form>
                    </Card>
                </Row>
            </div>
        </div>
    );
};

export default AddPatient;