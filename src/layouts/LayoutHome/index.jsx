import { Avatar, Collapse, Layout } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import { Fragment } from "react"
import { UserOutlined } from '@ant-design/icons';

import "../LayoutHome/index.scss"
import LogoApp from "../../component/LogoApp";
import Sider from "antd/es/layout/Sider";
import { Link, NavLink } from "react-router-dom";

const LayoutHome = ({ children }) => {

    const listRoute = [
       {
        key: 'company',
        label: <p className="text-blue-800 text-base">Dashboard</p>,
        children:
            <div className="flex flex-col gap-2">  
                <NavLink to="/company"><p className="text-base pl-8 py-2 text-black">Tổng công ty</p></NavLink>
                <NavLink to="/project"><p className="text-base pl-8 py-2 text-black">Dự án</p></NavLink>
            </div>
        },
    ]

    return (
        <Fragment>
            <Layout className="layout-home">
                <Sider width="240px" className="sider border-r border-gray-300 text-xl">
                    <div className="flex justify-center items-center h-[69px] border-b border-gray-300">
                        <p className="text-2xl font-bold">LOGO KH</p>
                    </div>

                    <div className="p-2">
                    <Collapse
                        headerPadding="2px"
                        contentPadding="2px"
                        headerBg="#FFF"
                        collapsible="header"
                        bordered={false}
                        expandIconPosition="end"
                        defaultActiveKey={['company']}
                        items={listRoute}
                    />
                    </div>
                </Sider>
                <Layout>
                    <Header className="header border-b border-gray-300 relative">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >
                            <LogoApp />
                        </div>
                        <div className="flex justify-end items-center p-2">
                            <div className="flex gap-4">
                                <span className="text-sm font-bold">Thứ 6, 01/11/2001 10: 36</span>
                                <div className="h-[24px] w-[1px] bg-gray-400"></div>
                                <div className="flex items-center gap-4">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1024px-Flag_of_Vietnam.svg.png" className="w-[30px] h-[18px]" alt="" />
                                    <Avatar icon={<UserOutlined />} size={24} />
                                </div>
                            </div>
                        </div>
                    </Header>
                    <Content className="content">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Fragment>
    )
}

export default LayoutHome