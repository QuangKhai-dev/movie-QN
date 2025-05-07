import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { store } from '../../redux/store';
import { loginThunk } from '../../redux/thunk/userThunk';

const Login = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        store.dispatch(loginThunk(values)).unwrap().then(()=>{
            setTimeout(()=>{
                navigate('/')
            },1000)
        });
    };

    const onFinishFailed = (errorInfo) => {
    };

    return (
        <>
            <h2 className='mb-2'>Đăng nhập</h2>
            <Form
                name="basic"
                layout='vertical'
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tài khoản"
                    name="taiKhoan"
                    rules={[{ required: true, message: 'Tài khoản không được để trống o(TヘTo)' },{
                        
                    }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="matKhau"
                    rules={[{ required: true, message: 'Mật khẩu không được trống' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{span: 24 }}>
                    <span>Bạn chưa có tài khoản?<Link to={'/dangky'} style={{color:'blue'}}> Đăng ký ngay</Link></span>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Login;