import styled from "styled-components"
import usersIcon from "../../assets/img/UsersThree.svg"
import { FieldValues, UseFormWatch } from "react-hook-form"

type CounterProps = {
  watch: UseFormWatch<FieldValues>
}

const Counter = ({ watch }: CounterProps) => {
  const values = watch()

  return (
    <Counter.Wrapper>
      <img src={usersIcon} alt="counter" />
      <div className="count">
        <p>Счетчик аудитории</p>
        <span>{Object.keys(values?.audience || {})?.length}</span>
      </div>
    </Counter.Wrapper>
  )
}

Counter.Wrapper = styled.div`
  display: flex;
  align-items: center;

  .count {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    p {
      color: #989da0;
      font-size: 12px;
      font-weight: 500;
    }

    span {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  }
`

export default Counter
