import {Layout} from 'antd';
import { FormDashboardComponent } from '../components';


const {Content} = Layout

export const DashboardComponent = () => {
    
    return (
        <Content
        style={{
            padding: '0 24px',
            minHeight: 280,
        }}
        >
        <FormDashboardComponent></FormDashboardComponent>
    </Content>
    )
}

