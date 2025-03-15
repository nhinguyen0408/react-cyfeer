import React from "react";
import Container from "../../component/Container";
import { Col, Pagination, Row, Select, Table } from "antd";

const ProjectPage = () => {
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

    const data = [
        {key: 1, title: 'A', code: 'PACNNAU', contact_phone: '0982677122', contact_email: 'an@id.co', address: '9 Nguyễn Khoái, P1, Q4'},
        {key: 2, title: 'A', code: 'PACNNAU', contact_phone: '0982677122', contact_email: 'an@id.co', address: '9 Nguyễn Khoái, P1, Q4'},
        {key: 3, title: 'A', code: 'PACNNAU', contact_phone: '0982677122', contact_email: 'an@id.co', address: '9 Nguyễn Khoái, P1, Q4'},
        {key: 4, title: 'A', code: 'PACNNAU', contact_phone: '0982677122', contact_email: 'an@id.co', address: '9 Nguyễn Khoái, P1, Q4'},
        {key: 5, title: 'A', code: 'PACNNAU', contact_phone: '0982677122', contact_email: 'an@id.co', address: '9 Nguyễn Khoái, P1, Q4'},
    ]

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
                <Table columns={columns} dataSource={data} pagination={false} />
            </Container>
        </div>
    )
}

export default ProjectPage
