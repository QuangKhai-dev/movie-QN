import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { store } from '../../redux/store';
import { registerThunk } from '../../redux/thunk/userThunk';

const Register = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        store.dispatch(registerThunk(values)).unwrap().then(() => {
            setTimeout(() => {
                navigate('/dangnhap')
            }, 1000)
        });
    };

    const onFinishFailed = (errorInfo) => {
    };

    return (
        <>
            <h2 className='mb-2'>Đăng ký</h2>
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
                    rules={[
                        { required: true, message: 'Tài khoản không được để trống o(TヘTo)' },
                        { min: 5, message: 'Tài khoản không được ít hơn 5 kí tự ＞︿＜' },
                        { whitespace: false, message: 'Tài khoản không chứa khoản trắng OwO' }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    name="matKhau"
                    rules={[{ required: true, message: 'Mật khẩu không được  (╹ڡ╹ )' },
                    { min: 5, message: 'Mật khẩu tôi thiểu 5 kí tự {{{(>_<)}}}' },
                    { max: 15, message: 'Mật khẩu tối đa 15 kí tự (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧' }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"

                    rules={[{ required: true, message: 'Email không được trống /(ㄒoㄒ)/~~' },
                    { type: 'email', message: 'Email không hợp lệ (►__◄)' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Họ tên"
                    name="hoTen"
                    rules={[{ required: true, message: 'Họ tên không được trống' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    name="soDt"
                    rules={[{ required: true, message: 'Số điện thoại không được trống' },
                    { len: 10, message: 'Tối đa 10 ký số' }]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <span>Bạn đã có tài khoản?<Link to={'/dangnhap'} style={{ color: 'blue' }}> Trở về đăng nhập</Link></span>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Register;