import React, { Fragment, useContext, useEffect } from "react";
import Container from "../../component/Container";
import Loading from "../../component/Loading";
import { Avatar, Col, Empty, Row } from "antd";
import CarouselCustomize from "../../component/CarouselCustomize";
import { listImage } from "./const";
import { ShopOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { useQuery } from "@tanstack/react-query";
import DashboradAPI from "./apis";
import { AppContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['company'],
        queryFn: DashboradAPI.getlistCompany,
    })

    const { company, setCompany } = useContext(AppContext)
    const navigator = useNavigate()

    useEffect(() => {
        company && setCompany(null)
    }, [])

    const handlerSetCompany = (e) => {
        console.log('handlerSetCompany');
        setCompany(e)
        navigator('/company')
    }

    if (isLoading) return (<Loading />)


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
                        {data?.length && data?.map(e => 
                            <Col key={e.id} span={6} onClick={() => handlerSetCompany(e)}>
                                <Container shadow={true} className="cursor-pointer">
                                    <div className="flex gap-4">
                                        { e?.avatar
                                            ? <Avatar src={e.avatar} size={40} />
                                            : <Avatar icon={<ShopOutlined />} size={40} />
                                        }
                                        <div className="flex flex-col gap-4">
                                            <p className="text-blue-500 text-lg font-bold">{e.title}</p>
                                            <div className="flex flex-col gap-1">
                                                <p className="font-light text-sm text-gray-600"><span className="font-bold">Địa chỉ:</span> {e.address}</p>
                                                <p className="font-light text-sm text-gray-600"><span className="font-bold">Điện thoại:</span> {e.phone}</p>
                                                <p className="font-light text-sm text-gray-600"><span className="font-bold">Email:</span> {e.email}</p>
                                                <p className="font-light text-sm text-gray-600"><span className="font-bold">Mã số thuế:</span> {e.tax_number}</p>
                                                <p className="font-light text-sm text-gray-600"><span className="font-bold">Website:</span> <a href="" target="blank">{e.website}</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </Col>
                        )}
                        {
                            !data?.length && <Col flex={1}><Empty /></Col>
                        }
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default DashboardPage
