import {Layout,Flex,Divider,Popover,Alert} from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons'
import { FormDashboardComponent, ListDashboardComponent, SiderDashboardComponent, DrawerComponent } from '../components';


const {Content} = Layout

const listaInfo = (
    <Alert type='info' message='Mensaje sobre información' showIcon='true' />
)

export const DashboardComponent = () => {
    
    return (
        <Content
        style={{
        }}
        >
            <Flex
                gap="large"
                style={{height:'100%'}}
            >
            <section>
                <Divider orientation='left' >Lista Afiliados &emsp;
                    <Popover content={listaInfo}trigger="hover">
                        <InfoCircleTwoTone />
                    </Popover> 
                </Divider>
                {/* <div className="code-box"> */}
                    <SiderDashboardComponent></SiderDashboardComponent>
                    <DrawerComponent></DrawerComponent>
                {/* </div> */}
            </section>
            <section>
                <Divider orientation='left' >Lista Autorizaciones
                &emsp;
                    <Popover content={listaInfo}trigger="hover">
                        <InfoCircleTwoTone />
                    </Popover> 
                </Divider>
                {/* <div className="code-box"> */}
                    <ListDashboardComponent></ListDashboardComponent>
                {/* </div> */}
            </section>
            <section>
                <Divider orientation='left' >Formulario carga de autorizaciones
                &emsp;
                    <Popover content={listaInfo}trigger="hover">
                        <InfoCircleTwoTone />
                    </Popover> 
                </Divider>
                <div className="code-box bg-azul">
                    <FormDashboardComponent></FormDashboardComponent>
                </div>
            </section>
            </Flex>
    </Content>
    )
}

