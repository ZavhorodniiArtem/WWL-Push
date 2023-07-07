import "./App.css"
import styled from "styled-components"
import Side from "./layout/Side"
import Layout from "./layout/Layout"

const App = () => {
  return (
    <App.Wrapper>
      <Side />
      <Layout />
    </App.Wrapper>
  )
}

App.Wrapper = styled.div`
  display: flex;
`

export default App
