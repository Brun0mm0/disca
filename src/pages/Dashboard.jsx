import { Layout, Divider, theme, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { HeaderComponent,FooterComponent,DashboardComponent } from '../layouts';
import { SiderDashboardComponent, DrawerComponent } from '../components';


const { Content, Sider } = Layout;

export const Dashboard = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
    style={{
      height:'100%'
    }}>
      <HeaderComponent />
      <Content
        style={{
          padding: '24px 48px',
        }}
        >
        <Layout
          style={{
            padding: '12px',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: '100%'
          }}
        >
          <DashboardComponent></DashboardComponent>
        </Layout>
      </Content>
      <FooterComponent/>
    </Layout>
  );
};
