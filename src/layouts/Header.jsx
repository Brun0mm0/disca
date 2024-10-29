import { Layout, Menu, Button, Typography, Space } from 'antd'
import { UserComponent } from '../components';

// #aadaed
const { Header } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
const {Text} = Typography

export const HeaderComponent = () => {
  return (
    <>
    <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor:'#e6f4ff',
          border: 'solid 2px #009ADA',
          borderRadius: '10px'
        }}
      >
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor:'transparent',
          }}
        />
        <UserComponent></UserComponent>        
      </Header>
    </>
  )
}
