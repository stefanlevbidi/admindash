import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Space, Badge, Image, Typography } from "antd";

function AppHeader () {
    return <div className="AppHeader">
        <Image width={40} src="https://yt3.ggpht.com/PDZSN7n3MEEAPn2J8706eZmWRXAVgJZImqCHQ8RJDfwUhHuNgLO4S7WARgUdo0x9ifEK44lThw=s108-c-k-c0x00ffffff-no-rj"></Image>
        <Typography.Title>Stefan's DashBoard</Typography.Title>
        <Space>
            <Badge count={10} dot>
            <MailOutlined style={{ fontSize: 24 }} />
            </Badge>
            <Badge count={20}>
            <BellFilled style={{ fontSize: 24 }} />
            </Badge>
        </Space>
    </div>;

}

export default AppHeader;