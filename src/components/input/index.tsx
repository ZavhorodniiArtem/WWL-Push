import styled from "styled-components"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { ChangeEvents } from "../../view/push/compounds/Segmentation"

type InputProps = {
  themeBg?: string
  placeholder?: string
  register?: UseFormRegister<FieldValues>
  registerName?: string
  errorName?: string
  isRequired?: boolean
  errors: FieldErrors
  isOnChange?: (e: ChangeEvents) => void
}

const Input = ({
  themeBg,
  placeholder,
  register,
  registerName,
  isRequired,
  errorName,
  errors,
  isOnChange,
}: InputProps) => {
  if (isOnChange) {
    return (
      <Input.Wrapper themeBg={themeBg}>
        <input onChange={isOnChange} placeholder={placeholder} />
      </Input.Wrapper>
    )
  }

  if (register && registerName) {
    return (
      <Input.Wrapper themeBg={themeBg}>
        <input
          {...register(registerName, { required: isRequired })}
          placeholder={placeholder}
        />
        {isRequired && errors[registerName] && (
          <Input.Error>{errorName}</Input.Error>
        )}
      </Input.Wrapper>
    )
  }
}

Input.Wrapper = styled.div<{ themeBg?: string }>`
  display: flex;
  flex-direction: column;

  input {
    padding: 12px 20px;
    border-radius: 4px;
    border: 1px solid #536274;
    background: ${({ themeBg }) =>
      themeBg === "dark" ? "#22282F" : "#323a47"};
    outline: none;
    font-size: 16px;
    color: #fff;
  }
`

Input.Error = styled.div`
  color: rgba(218, 70, 73, 1);
  margin-top: 4px;
`

export default Input
