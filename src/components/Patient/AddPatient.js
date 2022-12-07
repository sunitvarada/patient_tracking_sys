import React, { useEffect } from 'react';
import '../../App.css'
import { Card, Col, Row, Form ,Button, Input, InputNumber, Select, Radio} from 'antd';
import axios from 'axios';
const { TextArea } = Input;




const AddPatient = () => {
    const url = "";
    const onFinish = (values) => {
        const currentDate = new Date().toLocaleDateString();
        console.log("today's date",currentDate);

        const formData = JSON.stringify(values);
        console.log("Success:",formData);
        axios
          .post(url, formData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
     const [form] = Form.useForm();
     const onReset = () => {
       form.resetFields();
     };
     
    
    
    return (
      <Card
        title="Add Patient"
        bordered={true}
        style={{
          margin: "0",
        }}
      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[16, 16]}>
            <Col span={12}>
              {/*Patient Name*/}
              <Form.Item
                label="Name"
                name="pName"
                rules={[
                  {
                    required: true,
                    message: "Field cannot be empty!",
                  },
                ]}
                required
              >
                <Input placeholder="Enter Patient Name" id="pName" />
              </Form.Item>
              {/*Patient Age, Gender, Contact, Emergency Contact*/}
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label="Contact"
                    name="pContact"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input id="pContact" type="tel" />
                  </Form.Item>
                  <Form.Item
                    label={`Gender`}
                    name="pGender"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Select
                      id="pGender"
                      defaultValue="--Select--"
                      options={[
                        {
                          value: "Male",
                          label: "Male",
                        },
                        {
                          value: "Female",
                          label: "Female",
                        },
                        {
                          value: "Other",
                          label: "other",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Emergency Contact"
                    name="pEContact"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input id="pEContact" type="tel" />
                  </Form.Item>
                  <Form.Item
                    label={`Age`}
                    name="pAge"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <InputNumber
                      id="pAge"
                      placeholder={`Enter Age`}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              {/*    End of Age Gender Contact Emergency Contact*/}
              {/*Patient Address*/}
              <Form.Item
                label="Address"
                name="pAddress"
                required
                rules={[
                  {
                    required: true,
                    message: "Field cannot be empty!",
                  },
                ]}
              >
                <Input placeholder="Enter Patient Address" id="pAddress" />
              </Form.Item>
              {/*Patient City State District ZipCode */}
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label={`City`}
                    name="pCity"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input id="pCity" placeholder={`City`} />
                  </Form.Item>
                  <Form.Item
                    label={`State`}
                    name="pState"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input id="pState" placeholder={`State`} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="District"
                    name="pDistrict"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input
                      id="pDistrict"
                      placeholder={`District`}
                      type="text"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Zip Code"
                    name="pZipcode"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input id="pZipcode" placeholder={`Zipcode`} type="text" />
                  </Form.Item>
                </Col>
              </Row>
              {/*    End of City State District ZipCode */}
            </Col>
            {/* End of Column 1 */}

            <Col span={12}>
              {/*Patient Temp BP Height Weight */}
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item
                    label={`Temperature`}
                    name="pTemperature"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input id="pTemperature" placeholder={`Temperature`} />
                  </Form.Item>
                  <Form.Item
                    label={`Blood Pressure`}
                    name="pBloodPressure"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input id="pBloodPressure" placeholder={`Blood Pressure`} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Height"
                    name="pHeight"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input id="pHeight" placeholder={`Height`} type="text" />
                  </Form.Item>
                  <Form.Item
                    label="Weight"
                    name="pWeight"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Field cannot be empty!",
                      },
                    ]}
                  >
                    <Input id="pWeight" placeholder={`Weight`} type="text" />
                  </Form.Item>
                </Col>
              </Row>
              {/*    End of Temp BP Heigth Weight */}

              {/* Consultant Doctor*/}
              <Form.Item
                label={`Consultant Doctor`}
                name="pDoctor"
                required
                rules={[
                  {
                    required: true,
                    message: "Field cannot be empty!",
                  },
                ]}
              >
                <Select
                  id="pDoctor"
                  defaultValue="--Select--"
                  options={[
                    {
                      value: "Dr. Ramesh",
                      label: "Dr. Ramesh",
                    },
                    {
                      value: "Dr. Suresh",
                      label: "Dr. Suresh",
                    },
                    {
                      value: "Dr. Kamesh",
                      label: "Dr. Kamesh",
                    },
                  ]}
                />
              </Form.Item>

              {/*  Doctor Diagnosis  */}
              <Form.Item
                label={`Diagnosis`}
                name="pDiagnosis"
                required
                rules={[
                  {
                    required: true,
                    message: "Field cannot be empty!",
                  },
                ]}
              >
                <TextArea
                  placeholder="Diagnosis"
                  autoSize={{
                    minRows: 3,
                    maxRows: 5,
                  }}
                />
              </Form.Item>
              {/*  Mode of Payment  */}
              <Form.Item
                label={`Mode of Payment`}
                name="pMod"
                required
                rules={[
                  {
                    required: true,
                    message: "Field cannot be empty!",
                  },
                ]}
              >
                <Radio.Group id="pMod">
                  <Radio value={`Cash`}>Cash</Radio>
                  <Radio value={`Card`}>Card</Radio>
                  <Radio value={`Insurance`}>Insurance</Radio>
                  <Radio value={`UPI`}>UPI</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          {/*  */}
          <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                htmlType="reset"
                style={{
                  position: "relative",
                  backgroundColor: "#f2120d",
                  color: "white",
                  margin: "0 auto",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={onReset}
              >
                Reset
              </Button>
            </Form.Item>
            {/*  */}
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Add Patient Details
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Card>
    );
};

export default AddPatient;