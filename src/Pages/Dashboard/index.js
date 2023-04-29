import { ShoppingCartOutlined, DollarCircleOutlined, UserOutlined, ShoppingOutlined
  } from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";

function Dashboard() {
    return ( 
    <div>
        <Typography.Title level={4}> Dashboard </Typography.Title>
        <Space direction="horizontal">
       <DashboardCard icon={<ShoppingCartOutlined />} title={"Orders"} value={12345} />
       <DashboardCard icon={<ShoppingOutlined />} title={"Inventory"} value={12345} />
       <DashboardCard icon={<UserOutlined />} title={"Customer"} value={12345} />
       <DashboardCard icon={<DollarCircleOutlined />} title={"Revenue"} value={12345} />
        </Space>
    </div>
    );
}

function DashboardCard({ title, value, icon }) {
   return ( 
   <Card>
    <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
        </Space>
    </Card>
   );
}

export default Dashboard