import React, { ChangeEvent, FunctionComponent, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Input, Space } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../services/apiServices';
import { setUserContext } from '../../App';
const Login: FunctionComponent = () => {
  let history = useHistory();
  const { findActiveUser } = useContext(setUserContext);

  const [ModalText, setModalText] = useState('if you havent register please click here');
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function showModal() {
    setVisible(true);
  }
  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handlePass(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleOk() {
    setConfirmLoading(true);
    setModalText('Logging in');
    const user = await getUser({ email, password });
    if (user.message){ 
      alert(user.message);
      setConfirmLoading(false);
    }
    else if (findActiveUser) {
      findActiveUser(user);      ;
      setVisible(false);
      setConfirmLoading(false);
      history.push('/')
    }
  }

  function handleCancel() {
    console.log('Clicked cancel button');
    setVisible(false);
  }

  return (
    <>
      <Button type='primary' shape='circle' style={{ backgroundColor: '#034071' }} icon={<UserOutlined />} onClick={showModal}></Button>
      <Modal title='Login Page' visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <Space direction='vertical'>
          <Input type='email' value={email} placeholder='Enter your email' onChange={handleEmail} prefix={<UserOutlined className='site-form-item-icon' />} />
          <Input.Password placeholder='input password' iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} onChange={handlePass} />
        </Space>
        <br />
        <p>
          {' '}
          if you havent register please click <Link to='register'>here</Link>
        </p>
      </Modal>
    </>
  );
};

export default Login;
