import React, { Fragment } from "react";
import Container from "../../component/Container";
import { Avatar, Col, Row } from "antd";
import CarouselCustomize from "../../component/CarouselCustomize";
import { listImage } from "./const";
import { ShopOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";

const DashboardPage = () => {
    return (
        <Fragment>
            <div className="p-4">
                <Container shadow={true} className="flex flex-col gap-4">
                    <Row>
                        <Col span={12}>
                            <p className="text-3xl font-bold mb-2">Chào mừng đến với CyHome</p>
                            <p className="text-sm">Cyhome là nền tảng công nghệ điện toán đám mây được xây dựng với mục đích hỗ trợ công tác quản lý và vận hành các loại hình bất động sản đầu tiên tại Việt Nam</p>
                        </Col>
                        <Col span={12} className="border border-gray-300">
                            <CarouselCustomize images={listImage} overlay={false} imageSize={{ height: "300px" }} />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Search
                                placeholder="Tìm kiếm"
                                enterButton
                                // onSearch={onSearch}
                            />
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={6}>
                            <Container shadow={true}>
                                <div className="flex gap-4">
                                    <Avatar icon={<ShopOutlined />} size={40} />
                                    <div className="flex flex-col gap-4">
                                        <p className="text-blue-500 text-lg font-bold">Công ty cổ phần Cyfeer</p>
                                        <div className="flex flex-col gap-1">
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Địa chỉ:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Điện thoại:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Email:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Mã số thuế:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Website:</span> <a href="" target="blank">https://a.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Col>

                        <Col span={6}>
                            <Container shadow={true}>
                                <div className="flex gap-4">
                                    <Avatar icon={<ShopOutlined />} size={40} />
                                    <div className="flex flex-col gap-4">
                                        <p className="text-blue-500 text-lg font-bold">Công ty cổ phần Cyfeer</p>
                                        <div className="flex flex-col gap-1">
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Địa chỉ:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Điện thoại:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Email:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Mã số thuế:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Website:</span> <a href="" target="blank">https://a.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Col>

                        <Col span={6}>
                            <Container shadow={true}>
                                <div className="flex gap-4">
                                    <Avatar icon={<ShopOutlined />} size={40} />
                                    <div className="flex flex-col gap-4">
                                        <p className="text-blue-500 text-lg font-bold">Công ty cổ phần Cyfeer</p>
                                        <div className="flex flex-col gap-1">
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Địa chỉ:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Điện thoại:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Email:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Mã số thuế:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Website:</span> <a href="" target="blank">https://a.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Col>

                        <Col span={6}>
                            <Container shadow={true}>
                                <div className="flex gap-4">
                                    <Avatar icon={<ShopOutlined />} size={40} />
                                    <div className="flex flex-col gap-4">
                                        <p className="text-blue-500 text-lg font-bold">Công ty cổ phần Cyfeer</p>
                                        <div className="flex flex-col gap-1">
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Địa chỉ:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Điện thoại:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Email:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Mã số thuế:</span> BBB</p>
                                            <p className="font-light text-sm text-gray-600"><span className="font-bold">Website:</span> <a href="" target="blank">https://a.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default DashboardPage
