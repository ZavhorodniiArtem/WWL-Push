import styled from "styled-components"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

type TextFieldProps = {
  placeholder?: string
  themeBg?: string
  register: UseFormRegister<FieldValues>
  registerName: string
  errorName?: string
  isRequired?: boolean
  errors: FieldErrors
}

const TextField = ({
  placeholder,
  register,
  registerName,
  errorName,
  errors,
  isRequired,
  themeBg,
}: TextFieldProps) => {
  return (
    <TextField.Wrapper themeBg={themeBg}>
      <textarea
        {...register(registerName, { required: isRequired })}
        placeholder={placeholder}
        maxLength={150}
      />
      {isRequired && errors[registerName] && (
        <TextField.Error>{errorName}</TextField.Error>
      )}
    </TextField.Wrapper>
  )
}

TextField.Wrapper = styled.div<{ themeBg?: string }>`
  display: flex;
  flex-direction: column;

  textarea {
    padding: 12px 20px;
    border-radius: 4px;
    border: 1px solid #536274;
    background: ${({ themeBg }) =>
      themeBg === "dark" ? "#22282F" : "#323a47"};
    outline: none;
    font-size: 16px;
    color: #fff;
    resize: none;
    min-height: 110px;
  }
`

TextField.Error = styled.div`
  color: rgba(218, 70, 73, 1);
  margin-top: 4px;
`

export default TextField
