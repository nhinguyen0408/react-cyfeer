import React, { useContext, useEffect } from "react";
import Container from "../../component/Container";
import { Col, Pagination, Row, Select, Table } from "antd";
import CompanyAPI from "../company/apis";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "../../context/app-context";

const ProjectPage = () => {
    const { company, projectCtx, setProjectCtx } = useContext(AppContext)
    const { data, isError, error } = useQuery({
        queryKey: ['project-of-company', company?.id],
        queryFn: () => CompanyAPI.getProjectOfCompany({company: company?.id}),
        enabled: !!company?.id
    })

    const navigator = useNavigate()

    useEffect(() => {
        projectCtx && setProjectCtx(null)
        !company && navigator('/')
    }, [])

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Tên dự án',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Mã dự án',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'SĐT liện hệ',
            dataIndex: 'contact_phone',
            key: 'contact_phone',
        },
        {
            title: 'Email liên hệ',
            dataIndex: 'contact_email',
            key: 'contact_email',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
    ]

    const dataTable = data?.map((item, index) => ({
        ...item,
        key: index, 
    }));

    const handleTableRow = (item) => {
        setProjectCtx(item)
        return navigator(`/project/${item?.id}`)
    }

    if (isError) {
        console.error('Error:', error);
    }

    return (
        <div className="p-4 flex flex-col gap-4">
            <p className="text-xl font-bold">Danh sách dự án</p>
            <Container className="flex flex-col gap-4">
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
                <Table 
                    columns={columns} 
                    dataSource={dataTable} 
                    pagination={false} 
                    onRow={(record) => {
                        return {
                            onClick: () => handleTableRow(record)
                        }
                    }}
                />
            </Container>
        </div>
    )
}

export default ProjectPage
