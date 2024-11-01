import {Layout, Form, Input, Button, Checkbox} from 'antd'
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices';

const {Content} = Layout


export const Login = () => {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(loginUser(values))
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  return (
    <Layout
      style={{
        height:'100vh'
      }}
    >
      <Content>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
      </Form>
      </Content>
    </Layout>
  )
}


