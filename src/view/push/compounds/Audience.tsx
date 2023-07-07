import styled from "styled-components"
import Title from "../../../components/title"
import CustomSelect from "../../../components/select"
import { AUDIENCE_OPTIONS } from "../../../models/options"
import {
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormUnregister,
  UseFormWatch,
} from "react-hook-form"

export type AudienceProps = {
  errors: FieldErrors
  setValue: UseFormSetValue<FieldValues>
  watch: UseFormWatch<FieldValues>
  unregister: UseFormUnregister<FieldValues>
}

const Audience = ({ setValue, errors, watch, unregister }: AudienceProps) => {
  const handleClear = () => unregister("audience")

  return (
    <Audience.Wrapper>
      <Audience.Header>
        <Title title="Аудитория" withIcon />
        <p className="clear" onClick={handleClear}>
          Очистить
        </p>
      </Audience.Header>

      <CustomSelect
        options={AUDIENCE_OPTIONS}
        registerName="audience"
        errors={errors}
        setValue={setValue}
        isMulti
        watch={watch}
        isRequired
      />
    </Audience.Wrapper>
  )
}

Audience.Wrapper = styled.div`
  width: 100%;
`

Audience.Header = styled.div`
  display: flex;
  justify-content: space-between;
  .clear {
    font-size: 14px;
    color: rgba(218, 70, 73, 1);
    cursor: pointer;
  }
`

export default Audience
