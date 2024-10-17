import { Divider, Input,  List, Space } from "antd"
import { useState } from "react"
import {afiliado} from '../data'
const {Search} = Input

export const SiderDashboardComponent = () => {
    const [ busqueda , setBusqueda ] = useState('')
    
    const searchUsuario = afiliado.filter( user => {
        const queryLowerCase = busqueda.toLowerCase();
        return (
            user.nombre.toLowerCase().includes(queryLowerCase) ||
            String(user.nroAfiliado).includes(queryLowerCase)
        )
    })

  return (
    <>
      <Space
        direction="vertical"
        style={{
            width:'100%'
        }}
      >
        <Divider>Afiliados</Divider>
        <Search
            placeholder="Buscar Afiliado"
            onSearch={(e)=> setBusqueda(e.target.value)}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            enterButton
            allowClear
        />
        <List
            itemLayout="horizontal"
            bordered
            dataSource={searchUsuario}
            renderItem={user=>(
                <List.Item>
                    <List.Item.Meta
                        title={user.nombre}
                        description={user.nroAfiliado}
                    />  
                </List.Item>
            )}        
        />
      </Space>
    </>
  )
}
