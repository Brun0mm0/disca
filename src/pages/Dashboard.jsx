import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Divider, theme } from 'antd';
import { HeaderComponent,FooterComponent } from '../layouts';
import { SiderDashboardComponent } from '../components';


const { Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1; 
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

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
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={320}
          >
            <SiderDashboardComponent></SiderDashboardComponent>
          </Sider>
          <Divider
          style={{height:'100%'}} 
          type='vertical'/>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Content>
      <FooterComponent/>
    </Layout>
  );
};
