import { Layout } from "antd"

const {Footer} = Layout

export const FooterComponent = () => {
  return (
    <>
    <Footer
        style={{
          textAlign: 'center',
          padding: '0px 48px 12px 48px'
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
      
    </>
  )
}

