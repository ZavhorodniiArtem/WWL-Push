import styled from "styled-components"
import Title from "../../../components/title"
import Input from "../../../components/input"
import CustomSelect from "../../../components/select"
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form"
import TextField from "../../../components/textField"
import { LANGUAGES_OPTIONS } from "../../../models/options"

type MessageFormProps = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  setValue: UseFormSetValue<FieldValues>
}

const MessageForm = ({ register, errors, setValue }: MessageFormProps) => {
  return (
    <MessageForm.Wrapper>
      <div>
        <Title title="Заголовок сообщения" />
        <Input
          register={register}
          registerName="nameMessage"
          placeholder="Введите заголовок максимально 50 символов"
          isRequired
          errorName="Введите заголовок"
          errors={errors}
        />
      </div>

      <div>
        <Title title="Текст сообщения" />
        <TextField
          register={register}
          registerName="message"
          isRequired
          errorName="Введите сообщение"
          errors={errors}
          placeholder="Введите текст максимально 150 символов"
        />
      </div>

      <div>
        <Title title="Исходный язык" withIcon />
        <CustomSelect
          options={LANGUAGES_OPTIONS}
          placeholder="Выберите пункт"
          registerName="language"
          isRequired
          errorName="Выберите пункт"
          errors={errors}
          setValue={setValue}
        />
      </div>

      <MessageForm.Optional>
        <div>
          <Title title="Иконка" description="(опцильнально)" />
          <Input
            register={register}
            registerName="icon"
            placeholder="Введите ссылку на иконку"
            errors={errors}
          />
        </div>
        <div>
          <Title title="Изображение" description="(опцильнально)" />
          <Input
            register={register}
            registerName="img"
            placeholder="Введите ссылку на изображение"
            errors={errors}
          />
        </div>
      </MessageForm.Optional>
    </MessageForm.Wrapper>
  )
}

MessageForm.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 32px;
`

MessageForm.Optional = styled.div`
  display: flex;
  gap: 20px;
`

export default MessageForm
