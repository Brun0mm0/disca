import {Form,Input,Upload} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

export const FormDashboardComponent = () => (
 
    <Form>
      <Form.Item label="Afiliado">
        <Input/>
      </Form.Item>
      <Form.Item label="Documentacion:">
        <Upload action="/upload.io" listType="picture-card">
          <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
              >
              <PlusOutlined />
            <div
                style={{
                  marginTop: 8,
                }}
                >
                Subir
            </div>
          </button>
        </Upload>
      </Form.Item>
    </Form>
)

