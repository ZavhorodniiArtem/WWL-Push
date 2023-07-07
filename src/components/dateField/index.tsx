import DateTimePicker from "react-datetime-picker"
import "react-datetime-picker/dist/DateTimePicker.css"
import "react-calendar/dist/Calendar.css"
import "react-clock/dist/Clock.css"
import styled from "styled-components"
import calendar from "../../assets/img/icons/Calendar.svg"
import clock from "../../assets/img/icons/Clock.svg"
import {
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form"

type DateFieldProps = {
  isTime?: boolean
  registerName: string
  errorName?: string
  isRequired?: boolean
  errors: FieldErrors
  setValue: UseFormSetValue<FieldValues>
  watch: UseFormWatch<FieldValues>
}

const DateField = ({
  isTime,
  setValue,
  watch,
  registerName,
}: DateFieldProps) => {
  const values = watch()

  return (
    <DateField.Wrapper>
      {!isTime ? (
        <DateTimePicker
          onChange={(e) => setValue(registerName, e)}
          value={values?.[registerName] || null}
          calendarIcon={<img src={calendar} alt="date" />}
          clearIcon={null}
          format="dd.MM.y"
          dayPlaceholder="дд"
          monthPlaceholder="мм"
          yearPlaceholder="гггг"
        />
      ) : (
        <DateTimePicker
          onChange={(e) => setValue(registerName, e)}
          value={values?.[registerName] || null}
          calendarIcon={<img src={clock} alt="time" />}
          clearIcon={null}
          format="HH:mm"
          hourPlaceholder="--"
          minutePlaceholder="--"
          shouldOpenWidgets={({ widget }) => widget === "clock"}
        />
      )}
    </DateField.Wrapper>
  )
}

DateField.Wrapper = styled.div`
  .react-datetime-picker {
    background: #22282f;
    border-radius: 4px;
    border: 1px solid #536274;
    color: #fff;
    height: 46px;
    width: 210px;
  }
  .react-datetime-picker__inputGroup__input {
    outline: none;
  }

  .react-datetime-picker__wrapper {
    padding: 0 20px;
  }
`

export default DateField
