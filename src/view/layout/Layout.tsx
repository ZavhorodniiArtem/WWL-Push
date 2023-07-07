import styled from "styled-components"
import Push from "../push/Push"

const Layout = () => {
  return (
    <Layout.Layout>
      <Push />
    </Layout.Layout>
  )
}

Layout.Layout = styled.div`
  height: 100%;
  width: 100%;
  background: #22282f;
  border-radius: 4px;
  margin-top: 88px;
`

export default Layout
