import styled from "styled-components"
import info from "../../assets/img/icons/Info.svg"

type TitleProps = {
  title: string
  description?: string
  withIcon?: boolean
}

const Title = ({ title, description, withIcon }: TitleProps) => {
  return (
    <Title.Wrapper>
      <p>{title}</p>
      {description && <span>{description}</span>}
      {withIcon && <img src={info} alt="info" />}
    </Title.Wrapper>
  )
}

Title.Wrapper = styled.div`
  display: flex;
  margin-bottom: 8px;

  p {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-right: 16px;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    color: rgba(152, 157, 160, 1);
  }
`

export default Title
