import { Col, Pagination, Radio, Row, Select, Table } from "antd";
import React, { useContext, useEffect } from "react";
import Container from "../../component/Container";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/app-context";
import { converNumber } from "../../plugins/ulties";
import CompanyAPI from "./apis";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../component/Loading";

const CompanyPage = () => {
    const { company } = useContext(AppContext)
    const { data, isError, error } = useQuery({
        queryKey: ['project-of-company', company?.id],
        queryFn: () => CompanyAPI.getProjectOfCompany({company: company?.id}),
        enabled: !!company?.id
    })

    const navigator = useNavigate()

    useEffect(() => {
        !company && navigator('/')
    }, [])

    const columns = [
        {
            title: 'Dự án',
            dataIndex: 'title',
            key: 'title',
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

    const dataTable = data?.map((item, index) => ({
        ...item,
        key: index, 
    }));

    if (isError) {
        console.error('Error:', error);
    }

    return (
        company &&
            <div className="p-4 flex flex-col gap-4">
                <p className="text-xl font-medium">Dashboard</p>
                <Container className="flex flex-col gap-4">
                    <Row gutter={16}>
                        <Col flex={1}>
                            <Container className="!bg-[#E6E0FA]">
                                <div className="flex flex-col justify-between gap-4">
                                    <p>Số dự án</p>
                                    <p className="text-[#031343] font-bold text-lg">{company.number_of_project}</p>
                                </div>
                            </Container>

                        </Col>
                        <Col flex={1}>
                            <Container className="!bg-[#FEF2E6]">
                                <div className="flex flex-col justify-between gap-4">
                                    <p>Tổng số nhân viên tại dự án</p>
                                    <p className="text-[#031343] font-bold text-lg">{converNumber(company.number_of_employee)}</p>
                                </div>
                            </Container>
                        </Col>
                        <Col flex={1}>
                            <Container className="!bg-[#E6FBEA] relative">
                                <div className="flex flex-col justify-between gap-4">
                                    <p>Rating trung bình</p>
                                    <p className="text-[#031343] font-bold text-lg">{company.rating}</p>
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
                                    <p className="text-[#031343] font-bold text-lg">{converNumber(company.must_revenue)}</p>
                                </div>
                            </Container>
                        </Col>
                        <Col flex={1}>
                            <Container className="!bg-[#DFEBEB] relative">
                                <div className="flex flex-col justify-between gap-4">
                                    <p>Đã thu trong tháng</p>
                                    <p className="text-[#031343] font-bold text-lg">{converNumber(company.collected)}</p>
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
                                            <li>{company.project_largest_scale_house.name}</li>
                                            <li>Số căn: {converNumber(company.project_largest_scale_house.number)}</li>
                                        </ul>
                                    </div>
                                </Container>

                                <Container shadow={true} className="!px-0">
                                    <div className="border-l-[4px] border-blue-900 py-1">
                                        <p className="pl-2 font-bold">Dự án lớn nhất về quy mô doanh thu</p>
                                    </div>
                                    <div className="px-8">
                                        <ul style={{ listStyleType: "circle" }}>
                                            <li>{company.project_largest_scale_revenue.name}</li>
                                            <li>Doanh thu tháng: {company.project_largest_scale_revenue.number}</li>
                                        </ul>
                                    </div>
                                </Container>

                                <Container shadow={true} className="!px-0">
                                    <div className="border-l-[4px] border-blue-900 py-1">
                                        <p className="pl-2 font-bold">Dự án lớn nhất về số lượng nhân sự</p>
                                    </div>
                                    <div className="px-8">
                                        <ul style={{ listStyleType: "circle" }}>
                                            <li>{company.project_largest_number_employee.name}</li>
                                            <li>Số lượng nhân sự: {converNumber(company.project_largest_number_employee.number)}</li>
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
                                    <p className="text-[#031343] font-bold text-lg">{converNumber(company.revenue_month, 'đ')}</p>
                                </div>
                            </Container>
                        </Col>
                        <Col flex={1}>
                            <Container className="!bg-[#F0F5FB]">
                                <div className="flex flex-col justify-between gap-4">
                                    <p>Trong quý</p>
                                    <p className="text-[#031343] font-bold text-lg">{converNumber(company.revenue_quarter, 'đ')}</p>
                                </div>
                            </Container>
                        </Col>
                        <Col flex={1}>
                            <Container className="!bg-[#F0F5FB]">
                                <div className="flex flex-col justify-between gap-4">
                                    <p>Trong năm</p>
                                    <p className="text-[#031343] font-bold text-lg">{converNumber(company.revenue_year, 'đ')}</p>
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

                    <Table columns={columns} dataSource={dataTable} pagination={false} />
                </Container>
            </div>
        
    )
}

export default CompanyPage
