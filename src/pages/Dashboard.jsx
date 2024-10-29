import { Layout } from 'antd';
import { HeaderComponent,FooterComponent,DashboardComponent } from '../layouts';


const { Content } = Layout;

export const Dashboard = () => {

  return (
    <Layout
    style={{
      height:'100%',
      padding: '6px 60px'
    }}>
      <HeaderComponent />
      <Content
        style={{
          padding: '12px 0',
        }}
        >
        <Layout
          style={{
            padding: '12px',
            background: '#fff',
            borderRadius: '10px',
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
