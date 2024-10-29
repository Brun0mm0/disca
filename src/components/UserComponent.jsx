import {Space,Typography,Dropdown, Button} from 'antd'
import { useEffect, useState } from 'react';

const { Text } = Typography
const usuario = 'Bruno Provenzano'
export const UserComponent = () => {
  
    const items = [
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: 'Cerrar Sesión',
          key: '3',
        },
      ];

      const [user,setUser] = useState('user')
      useEffect(()=>{
        setUser(usuario
        .split(' ')
        .map( palabra => palabra[0] )
        .join('')
        .toUpperCase())
      },[])
    return (
    <Space size='middle' direction='horizontal'>
          <Text>{usuario}</Text>
          <Dropdown 
            menu={{items}}
            trigger={['hover']}
            size='large' 
            shape='circle'
            style={{
              backgroundColor:'#02B57E',
              fontStyle: {color:'#fff'}
            }}>
              {/* <a > */}
            <Button
                shape='circle'
                size='large'
                onClick={(e) => e.preventDefault()}>
                {user}
            </Button>
        {/* </a> */}
          </Dropdown>
        </Space>
  )
}
