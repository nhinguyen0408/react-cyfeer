import { Spin } from "antd"

const Loading = () => {
    return (
        <div className="fixed left-0 top-0 right-0 h-screen flex items-center justify-center" style={{background: 'rgba(0, 0, 0, 0.4)'}}>
            <Spin size="large" />
        </div>
    )
}

export default Loading