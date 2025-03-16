import { Col, Pagination, Radio, Row, Select, Table } from "antd";
import React, { useContext, useEffect } from "react";
import Container from "../../../component/Container";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "../../../context/app-context";
import ProjectAPI from "../apis";
import { useNavigate } from "react-router-dom";
import { converNumber } from "../../../plugins/ulties";

const ProjectDetailPage = () => {
    const { company, projectCtx } = useContext(AppContext)
    const { data, isError, error } = useQuery({
        queryKey: ['project-of-company', projectCtx?.id],
        queryFn: () => ProjectAPI.getProjectRevenue({ project: projectCtx?.id }),
        enabled: !!company?.id
    })

    const navigator = useNavigate()

    useEffect(() => {
        if (!projectCtx) navigator('/project')
        if (!company) navigator('/')
    }, [])

    const columns = [
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
            title: 'Ghi chú',
            dataIndex: 'note',
            key: 'note',
        },
    ]

    const dataTable = data?.map((item, index) => ({
        ...item,
        key: index,
        estimated_revenue: converNumber(item.estimated_revenue),
        real_revenue: converNumber(item.real_revenue),
    }));


    if (isError) {
        console.error('Error:', error);
    }

    return (
        projectCtx &&
        <div className="p-4 flex flex-col gap-4">
            <Container className="flex flex-col gap-4">
                <p className="text-lg font-medium">Tổng quan dự án</p>
                <Row gutter={16}>
                    <Col flex={1}>
                        <Container className="!bg-[#E6E0FA]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Số căn hộ</p>
                                <p className="text-[#031343] font-bold text-lg">{converNumber(projectCtx.number_of_home)}</p>
                            </div>
                        </Container>

                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#FEF2E6]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Số cư dân</p>
                                <p className="text-[#031343] font-bold text-lg">{converNumber(projectCtx.number_of_people)}</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#E6FBEA] relative">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Số nhân viên</p>
                                <p className="text-[#031343] font-bold text-lg">{converNumber(projectCtx.number_of_employee)}</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#F0F5FB]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Số nhà cung cấp</p>
                                <p className="text-[#031343] font-bold text-lg">{converNumber(projectCtx.number_of_supplier)}</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#DFEBEB] relative">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Số xe máy</p>
                                <p className="text-[#031343] font-bold text-lg">{converNumber(projectCtx.number_of_motorbike)}</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#BFCCF4] relative">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Số ô tô</p>
                                <p className="text-[#031343] font-bold text-lg">{converNumber(projectCtx.number_of_car)}</p>
                            </div>
                        </Container>
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
                                <p className="text-[#031343] font-bold text-lg">{converNumber(projectCtx.revenue_month, 'đ')}</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#F0F5FB]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Trong quý</p>
                                <p className="text-[#031343] font-bold text-lg">{converNumber(projectCtx.revenue_quarter, 'đ')}</p>
                            </div>
                        </Container>
                    </Col>
                    <Col flex={1}>
                        <Container className="!bg-[#F0F5FB]">
                            <div className="flex flex-col justify-between gap-4">
                                <p>Trong năm</p>
                                <p className="text-[#031343] font-bold text-lg">{converNumber(projectCtx.revenue_year, 'đ')}</p>
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

export default ProjectDetailPage
