import { Divider, Input,  List, Space } from "antd"
import { useState } from "react"

const {Search} = Input

export const SiderDashboardComponent = () => {
    const [ busqueda , setBusqueda ] = useState('')
    const afiliado = [
        {di:1,nroAfiliado:12345-6,nombre:'Felipe'},
        {di:2,nroAfiliado:12367-6,nombre:'Susanita'},
        {di:3,nroAfiliado:12389-6,nombre:'Mafalda'},
        {di:4,nroAfiliado:12300-6,nombre:'Miguelito'},
        {di:5,nroAfiliado:12312-6,nombre:'Manolito'}
    ]
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
