import { Button, Col, Form, Input, Modal, Row } from "antd";
import React, { Fragment, useContext, useEffect, useState } from "react";
import CarouselCustomize from "../../../component/CarouselCustomize";
import { listImage } from "./const";
import LogoApp from "../../../component/LogoApp";
import AuthAPI from "../apis";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/app-context";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setCookieUser] = useCookies(['user']);
    const { setIsLoading } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate();

    useEffect(()=> {
        user?.user?.email && navigate('/')
    }, [])

    const handleLogin = async () => {
        const payloadLogin = {
            email, password
        }
        setIsLoading(true)
        const res = await AuthAPI.getAccount(payloadLogin)
        console.log(res);
        if (res?.length) {
            setCookieUser('user', res[0]);
            navigate('/')
        } else {
            setIsModalOpen(true)
        }

        return setIsLoading(false)
    }

    return (
        <Fragment>
            <Row>
                <Col span={8}>
                    <CarouselCustomize images={listImage} />
                </Col>
                <Col span={16}>
                <div className="flex items-center justify-center h-screen w-full">
                    <div className="text-base flex flex-col gap-4 items-center w-[400px]">
                        <LogoApp />
                        <p className="text-xl font-medium">Đăng nhập</p>
                        <Form onFinish={handleLogin} className="w-full">
                            <div className="w-full">
                                <label htmlFor="email" className="w-full"><span className="text-red-900">*</span> Email</label>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                        required: true,
                                        message: 'Vui lòng nhập email',
                                        },
                                    ]}
                                >
                                    <Input id="email" value={email} placeholder="Nhập email" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Item>
                            </div>
                            <div className="w-full">
                                <label htmlFor="pass" className="w-full"><span className="text-red-900">*</span> Mật khẩu</label>
                                <Form.Item
                                    name="pass"
                                    rules={[
                                        {
                                        required: true,
                                        message: 'Vui lòng nhập mật khẩu',
                                        },
                                    ]}
                                >
                                    <Input.Password id="pass" value={password} placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                                </Form.Item>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button color="primary" type="primary" htmlType="submit">Đăng nhập</Button>
                            </div>
                        </Form>
                        <p>Quên mật khẩu?</p>
                        <p>Bạn chưa có tài khoản? <span className="font-bold text-blue-900 underline">Đăng ký</span></p>
                    </div>
                </div>
                </Col>
            </Row>

            <Modal title="Thông báo" open={isModalOpen} onOk={() => setIsModalOpen(false)}>
                <p className="text-xl font-bold text-orange-500 mb-4 text-center">Đăng nhập thất bại</p>
                <p className="text-sm text-center">Email không tồn tại hoặc sai mật khẩu</p>
            </Modal>
        </Fragment>
    )
}

export default Login
