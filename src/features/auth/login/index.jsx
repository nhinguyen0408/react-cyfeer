import { Button, Col, Input, Row } from "antd";
import React, { Fragment, useState } from "react";
import CarouselCustomize from "../../../component/CarouselCustomize";
import { listImage } from "./const";
import LogoApp from "../../../component/LogoApp";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        // const payloadLogin = {
        //     email, password
        // }
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
                        <div className="w-full">
                            <label htmlFor="email" className="w-full"><span className="text-red-900">*</span> Email</label>
                            <Input id="email" value={email} placeholder="Nhập email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="pass" className="w-full"><span className="text-red-900">*</span> Mật khẩu</label>
                            <Input id="pass" value={password} placeholder="Nhập mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button color="primary" type="primary" onClick={handleLogin}>Đăng nhập</Button>
                        <p>Quên mật khẩu?</p>
                        <p>Bạn chưa có tài khoản? <span className="font-bold text-blue-900 underline">Đăng ký</span></p>
                    </div>
                </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Login
