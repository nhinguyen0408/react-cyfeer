import { Col, Pagination, Radio, Row, Select, Table } from "antd";
import React from "react";
import Container from "../../component/Container";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";

const CompanyPage = () => {
    const columns = [
        {
            title: 'Dự án',
            dataIndex: 'project',
            key: 'project',
        },
        {
            title: 'Dự thu',
            dataIndex: 'estimated_revenue',
            key: 'estimated_revenue',
        },
        {
            title: 'Thực thu',
            dataIndex: 'real_revenue',
            key: 'real_revenue',
        },
        {
            title: 'Còn phải thu',
            dataIndex: 'must_done_revenue',
            key: 'must_done_revenue',
        },
    ]
    const data = [
        {
            key: '1',
            project: 'Vinhomes',
            estimated_revenue: 3498812882,
            real_revenue: 3498812882,
            must_done_revenue: 3498812882,
        },

        {
            key: '2',
            project: 'Vinhomes',
            estimated_revenue: 3498812882,
            real_revenue: 3498812882,
            must_done_revenue: 3498812882,
        },

        {
            key: '3',
            project: 'Vinhomes',
            estimated_revenue: 3498812882,
            real_revenue: 3498812882,
            must_done_revenue: 3498812882,
        },

        {
            key: '4',
            project: 'Vinhomes',
            estimated_revenue: 3498812882,
            real_revenue: 3498812882,
            must_done_revenue: 3498812882,
        },

        {
            key: '5',
            project: 'Vinhomes',
            estimated_revenue: 3498812882,
            real_revenue: 3498812882,
            must_done_revenue: 3498812882,
        },

        {
            key: '6',
            project: 'Vinhomes',
            estimated_revenue: 3498812882,
            real_revenue: 3498812882,
            must_done_revenue: 3498812882,
        },

        {
            key: '7',
            project: 'Vinhomes',
            estimated_revenue: 3498812882,
            real_revenue: 3498812882,
            must_done_revenue: 3498812882,
        },
    ]
    return (
        <div className="p-4 flex flex-col gap-4">
            <p className="text-xl font-medium">Dashboard</p>
            <Container className="flex flex-col gap-4">
                <Row gutter={16}>
                    <Col flex={1}>
                        <Container className="!bg-[#E6E0FA]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Số dự án</p>
                                <p className="text-[#031343] font-bold text-lg">50</p>
                            </div>
                        </Container>

                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#FEF2E6]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Tổng số nhân viên tại dự án</p>
                                <p className="text-[#031343] font-bold text-lg">1200</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#E6FBEA] relative">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Rating trung bình</p>
                                <p className="text-[#031343] font-bold text-lg">1200</p>
                                <div className="rounded-xl w-fit px-1 flex gap-2 items-center bg-[#C9F2C8] absolute bottom-4 right-4">
                                    <RiseOutlined style={{ color: "#0B8A00" }} />
                                    <span className="text-[#0B8A00]">10.0%</span>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#F0F5FB]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Phải thu trong tháng</p>
                                <p className="text-[#031343] font-bold text-lg">1200</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#DFEBEB] relative">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Đã thu trong tháng</p>
                                <p className="text-[#031343] font-bold text-lg">1200</p>
                            </div>
                            <div className="rounded-xl w-fit px-1 flex gap-2 items-center bg-[#DBC9C9] absolute bottom-4 right-4">
                                <FallOutlined style={{ color: "#C71026" }} />
                                <span className="text-[#C71026]">7.0%</span>
                            </div>
                        </Container>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col flex={1}>
                        <div className="flex flex-col gap-2">
                            <Container shadow={true} className="!px-0">
                                <div className="border-l-[4px] border-blue-900 py-1">
                                    <p className="pl-2 font-bold">Dự án lớn nhất về quy mô căn hộ</p>
                                </div>
                                <div className="px-8">
                                    <ul style={{ listStyleType: "circle" }}>
                                        <li>ABC</li>
                                        <li>Số căn: 50</li>
                                    </ul>
                                </div>
                            </Container>

                            <Container shadow={true} className="!px-0">
                                <div className="border-l-[4px] border-blue-900 py-1">
                                    <p className="pl-2 font-bold">Dự án lớn nhất về quy mô doanh thu</p>
                                </div>
                                <div className="px-8">
                                    <ul style={{ listStyleType: "circle" }}>
                                        <li>ABC</li>
                                        <li>Doanh thu tháng: 50 tỉ</li>
                                    </ul>
                                </div>
                            </Container>

                            <Container shadow={true} className="!px-0">
                                <div className="border-l-[4px] border-blue-900 py-1">
                                    <p className="pl-2 font-bold">Dự án lớn nhất về số lượng nhân sự</p>
                                </div>
                                <div className="px-8">
                                    <ul style={{ listStyleType: "circle" }}>
                                        <li>ABC</li>
                                        <li>Số lượng nhân sự: 150</li>
                                    </ul>
                                </div>
                            </Container>
                        </div>
                    </Col>
                    <Col flex={4}>
                        Bản đồ
                    </Col>
                </Row>
            </Container>

            <Container shadow className="flex flex-col gap-4">
                <Row>
                    <Col flex={1}>
                        <p className="text-lg font-bold">Doanh thu</p>
                    </Col>
                    <Col flex={1}>
                        <div className="flex gap-4 items-center justify-end">
                            <Radio.Group value={1}>
                                <Radio value={1}>Phải thu</Radio>
                                <Radio value={2}>Thực thu</Radio>
                            </Radio.Group>
                            <div className="w-[200px]">
                                <Select className="w-full" placeholder="Bộ lọc" size="large">
                                    <Select.Option value="sample">Sample</Select.Option>
                                </Select>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col flex={1}>
                        <Container className="!bg-[#F0F5FB]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Trong tháng</p>
                                <p className="text-[#031343] font-bold text-lg">50.000.000đ</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#F0F5FB]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Trong quý</p>
                                <p className="text-[#031343] font-bold text-lg">250.000.000đ</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#F0F5FB]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Trong năm</p>
                                <p className="text-[#031343] font-bold text-lg">1.050.000.000đ</p>
                            </div>
                        </Container>
                    </Col>
                </Row>

                <hr className="text-gray-300" />

                <Row>
                    <Col flex={1}>
                        <div className="flex items-center gap-2">
                            <span>Show</span>
                            <Select placeholder="Chọn" value={10} size="small">
                                <Select.Option value="10">10</Select.Option>
                                <Select.Option value="20">20</Select.Option>
                                <Select.Option value="50">50</Select.Option>
                                <Select.Option value="100">100</Select.Option>
                            </Select>
                            <span>of 23 results</span>
                        </div>
                    </Col>
                    <Col flex={1}>
                        <div className="flex justify-end">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </Col>
                </Row>

                <Table columns={columns} dataSource={data} pagination={false} />
            </Container>
        </div>
    )
}

export default CompanyPage
