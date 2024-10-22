import {Form,Input,Upload,Button} from 'antd';
import { useState } from 'react';

const {Dragger} = Upload

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  }

export const FormDashboardComponent = () => {
    const [componentVariant, setComponentVariant] = useState('filled');
    const onFormVariantChange = ({variant}) => {
        setComponentVariant(variant);
    }
  return (
    <Form
    {...formItemLayout}
    onValuesChange={onFormVariantChange}
    variant={componentVariant}
    style={{
        maxWidth:'100%'
    }}
    initialValues={{
        variant: componentVariant
    }}
    >
        <Form.Item
        label="Prueba"
        name="Prueba"
        rules={[{
            required: true,
            message:'campo obligatorio'
        }]}
        >
            <Input/>
        </Form.Item>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
    </Form>
  )
}

