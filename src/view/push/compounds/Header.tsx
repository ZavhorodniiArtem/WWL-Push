import styled from "styled-components"
import info from "../../../assets/img/icons/Info.svg"
import Counter from "../../../components/counter"
import { FieldValues, UseFormWatch } from "react-hook-form"

type HeaderProps = {
  watch: UseFormWatch<FieldValues>
}

const Header = ({ watch }: HeaderProps) => {
  return (
    <Header.Wrapper>
      <Header.Title>Пуши</Header.Title>
      <Header.Description>
        <div className="withIcon">
          <p>Создать новое пуш уведомление</p>
          <img src={info} alt="Info" />
        </div>

        <Counter watch={watch} />
      </Header.Description>
    </Header.Wrapper>
  )
}

Header.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`

Header.Title = styled.div`
  font-size: 32px;
  font-weight: 400;
  color: #989da0;
`

Header.Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  p {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }

  .withIcon {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      margin-left: 18px;
    }
  }
`
export default Header
