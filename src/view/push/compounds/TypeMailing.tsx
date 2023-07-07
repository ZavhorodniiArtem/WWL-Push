import styled from "styled-components"
import Title from "../../../components/title"
import CustomSelect from "../../../components/select"
import plus from "../../../assets/img/icons/Plus.svg"
import trash from "../../../assets/img/icons/Trash.svg"
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormUnregister,
  UseFormWatch,
} from "react-hook-form"
import DateField from "../../../components/dateField"
import { useState } from "react"
import { nanoid } from "nanoid"

type TypeMailingProps = {
  errors: FieldErrors
  setValue: UseFormSetValue<FieldValues>
  watch: UseFormWatch<FieldValues>
  register: UseFormRegister<FieldValues>
  unregister: UseFormUnregister<FieldValues>
}

const TypeMailing = ({
  setValue,
  errors,
  watch,
  unregister,
}: TypeMailingProps) => {
  const id = nanoid()
  const [countDates, setCountDates] = useState<string[]>([id])

  const values = watch()

  const deleteDate = (item: string) => {
    const filteredDates = countDates.filter((date) => date !== item)
    setCountDates(filteredDates)
    unregister(`date-${item}`)
    unregister(`time-${item}`)
  }

  const addDate = () => {
    setCountDates((prev) => [...prev, id])
    setValue(`date-${id}`, null)
    setValue(`time-${id}`, null)
  }

  const clearAll = () => {
    countDates.map((item) => {
      unregister(`time-${item}`)
      unregister(`date-${item}`)
    })
    setCountDates([])
  }

  return (
    <TypeMailing.Wrapper>
      <Title title="Выберите тип рассылки" withIcon />
      <CustomSelect
        options={[{ value: "date", label: "По дате" }]}
        registerName="mailingType"
        errors={errors}
        setValue={setValue}
        errorName="Выберите пункт"
        isRequired
      />

      {values?.mailingType && (
        <TypeMailing.DatePicker>
          {countDates.map((item) => {
            return (
              <TypeMailing.DateBox key={item}>
                <DateField
                  errors={errors}
                  errorName="Выберите дату"
                  isRequired
                  registerName={`date-${item}`}
                  setValue={setValue}
                  watch={watch}
                />
                <DateField
                  isTime
                  errors={errors}
                  errorName="Выберите время"
                  isRequired
                  registerName={`time-${item}`}
                  setValue={setValue}
                  watch={watch}
                />
                <img
                  src={trash}
                  alt="delete"
                  onClick={() => deleteDate(item)}
                />
              </TypeMailing.DateBox>
            )
          })}

          <TypeMailing.Buttons>
            <div className="add" onClick={addDate}>
              <img src={plus} alt="add" />
              <p>Добавить дату</p>
            </div>
            <p className="clear" onClick={clearAll}>
              Очистить
            </p>
          </TypeMailing.Buttons>
        </TypeMailing.DatePicker>
      )}
    </TypeMailing.Wrapper>
  )
}

TypeMailing.Wrapper = styled.div`
  width: 100%;
`

TypeMailing.DatePicker = styled.div`
  display: flex;
  flex-direction: column;
  background: #323a47;
  margin-top: 8px;
  border-radius: 4px;
  padding: 20px 12px;
`

TypeMailing.DateBox = styled.div`
  display: flex;
  width: 70%;
  gap: 8px;
  margin-bottom: 12px;
  img {
    cursor: pointer;
  }
`

TypeMailing.Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  .add {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      font-weight: 600;
      margin-left: 12px;
      color: rgba(240, 177, 28, 1);
    }
    &:hover {
      opacity: 0.75;
    }
  }

  .clear {
    font-weight: 600;
    color: rgba(218, 70, 73, 1);
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
`

export default TypeMailing
