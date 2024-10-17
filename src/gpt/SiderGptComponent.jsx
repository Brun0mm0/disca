import { Layout, List, Button } from 'antd';

const { Header, Sider, Content } = Layout;

export const Pagina = () => {
  const data = [
    'Item 1',
    'Item 2',
    'Item 3',
    // Agrega más items según tus necesidades
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sider: Menú lateral personalizado */}
      <Sider
        collapsible
        render={({ items, logout }) => (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <List
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  {item}
                </List.Item>
              )}
              style={{ flex: 1, overflow: 'auto' }}
            />
            <Button type="primary" style={{ margin: '16px' }}>
              Botón Inferior
            </Button>
          </div>
        )}
      />

      {/* Content: Área principal */}
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <h2>Mi aplicación</h2>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Aquí va el contenido de la página
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};


