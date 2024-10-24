import {List, Tag} from 'antd'
import {FilePdfTwoTone} from '@ant-design/icons'
// import { useState } from 'react'

const data = [
    {
        id:'1',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
    {
        id:'2',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
    {
        id:'3',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
    {
        id:'4',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
    {
        id:'5',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'pendiente'
    },
    {
        id:'6',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'pendiente'
    },
    {
        id:'7',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
    {
        id:'8',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
    {
        id:'9',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
    {
        id:'10',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
    {
        id:'11',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
    {
        id:'12',
        fecha:'10-20-2024',
        practica:'atencion ambulatoria',
        estado:'aprobado'
    },
]

export const ListDashboardComponent = () => {
  return (
    <List
        dataSource={data}
        size='small'
        pagination="true"
        bordered="true"
        renderItem={(item) => (
            <List.Item
                actions={[<a key="cargar mas">ver</a>,]}
            >
                <List.Item.Meta 
                    avatar={<FilePdfTwoTone/>}
                    title={item.practica}
                    description={item.fecha}
                />
                <div>
                    <Tag color={item.estado === 'aprobado' ? 'success' : 'processing'}>{item.estado}</Tag>
                </div>
            </List.Item>
        )}
    />
  )
}
