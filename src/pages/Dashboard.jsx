import { Layout, Divider, theme, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { HeaderComponent,FooterComponent,DashboardComponent } from '../layouts';
import { SiderDashboardComponent } from '../components';


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
          <Sider
            style={{backgroundColor:'transparent'}}
            width={300}
            >
              <div style={{display: 'flex', flexDirection: 'column', height:'100%'}}>
                <SiderDashboardComponent></SiderDashboardComponent>
                <Divider style={{marginTop:'0'}}/>
                <Button type='primary' icon={<UserAddOutlined/>}>Agregar Afiliado</Button>
              </div>
          </Sider>
          <Divider
          style={{height:'100%'}} 
          type='vertical'/>
          <DashboardComponent></DashboardComponent>
        </Layout>
      </Content>
      <FooterComponent/>
    </Layout>
  );
};
