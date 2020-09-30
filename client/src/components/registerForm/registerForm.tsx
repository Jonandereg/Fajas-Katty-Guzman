import React, { FunctionComponent, useContext} from 'react';
import { Form, Input, Button, InputNumber, Select, Row, Col, Cascader, Checkbox } from 'antd';
import './registerForm.scss';
import { Redirect, useHistory } from 'react-router-dom';
import { postUser } from '../../services/apiServices';
import { setUserContext } from '../../App';

const RegisterForm: FunctionComponent = () => {
  const { findActiveUser } = useContext(setUserContext)
  let history = useHistory();
  type values = {
    email: String;
  };
  type residence = {
    value: string;
    label: String;
  };
  let residences: Array<residence> = [
    { value: 'Canada', label: 'Canada' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'spain' },
    { value: 'Venezuela', label: 'Venezuela' },
  ];
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a validate number!',
    },
  };

  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const [form] = Form.useForm();

  const onFinish = async (values: values) => {
    console.log('Received values of form: ', values);
    let user = await postUser(values);
    if (user.message) alert(user.message);
    else {
      if(findActiveUser) findActiveUser(user)
      history.push('/');
    }
  };
  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select style={{ width: 70 }}>
        <Option value='1'>+1</Option>
        <Option value='34'>+34</Option>
        <Option value='58'>+58</Option>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <div className='Container_RegisterForm'>
        <Form {...formItemLayout} form={form} name='register' onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name='email'
            label='E-mail'
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='firstName'
            label='First Name'
            rules={[
              {
                required: true,
                message: 'Please input your first name',
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='lastName'
            label='Last Name'
            rules={[
              {
                required: true,
                message: 'Please input your Last name',
              },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='age'
            label='Age'
            rules={[
              { type: 'number', min: 0, max: 99 },
              {
                required: true,
                message: 'Please input your Age!',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name='gender' label='Gender' rules={[{ required: true }]}>
            <Select placeholder='Gender' allowClear>
              <Option value='male'>male</Option>
              <Option value='female'>female</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='confirm'
            label='Confirm Password'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name='address1' label='Habitual Residence' rules={[{ type: 'array', required: true, message: 'Please select your habitual residence!' }]}>
            <Cascader options={residences} />
          </Form.Item>
          <Form.Item name='phoneNumber' label='Phone Number' rules={[{ required: true, message: 'Please input your phone number!' }]}>
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name='mobileNumber' label='Mobile Number' rules={[{ required: true, message: 'Please input your Mobile number!' }]}>
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name='agreement'
            valuePropName='checked'
            rules={[{ validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement')) }]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href=''>agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegisterForm;
