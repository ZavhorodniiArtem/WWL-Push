import styled from "styled-components"
import PushForm from "./PushForm"

const Push = () => {
  return (
    <Push.Wrapper>
      <PushForm />
    </Push.Wrapper>
  )
}

Push.Wrapper = styled.div`
  padding: 32px;
`

export default Push
