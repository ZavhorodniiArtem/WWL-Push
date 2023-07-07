import styled from "styled-components"
import { useForm } from "react-hook-form"
import Input from "../../components/input"
import Title from "../../components/title"
import MessageForm from "./compounds/MessageForm"
import CustomButton from "../../components/customButton"
import TypeMailing from "./compounds/TypeMailing"
import Audience from "./compounds/Audience"
import Header from "./compounds/Header"
import Segmentation from "./compounds/Segmentation"

const PushForm = () => {
  const {
    register,
    unregister,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <PushForm.Wrapper>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Header watch={watch} />

        <Title title="Название пуша" />
        <Input
          register={register}
          registerName="pushName"
          placeholder="Введите название нового пуша"
          isRequired
          errors={errors}
          errorName="Введите имя"
        />

        <PushForm.Share />

        <PushForm.Forms>
          <MessageForm
            register={register}
            errors={errors}
            setValue={setValue}
          />

          <PushForm.FormTypes>
            <TypeMailing
              setValue={setValue}
              errors={errors}
              watch={watch}
              register={register}
              unregister={unregister}
            />

            <Audience
              setValue={setValue}
              errors={errors}
              watch={watch}
              unregister={unregister}
            />

            <Segmentation
              setValue={setValue}
              errors={errors}
              watch={watch}
              unregister={unregister}
            />
          </PushForm.FormTypes>
        </PushForm.Forms>

        <PushForm.Buttons>
          <CustomButton
            title="Отмена"
            onClick={() => console.log("Отмена и Редирект")}
            isOutline
          />
          <CustomButton title="Создать Пуш" type="submit" />
        </PushForm.Buttons>
      </form>
    </PushForm.Wrapper>
  )
}

PushForm.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

PushForm.Share = styled.div`
  background: #536274;
  height: 1px;
  margin: 32px 0;
`

PushForm.Forms = styled.div`
  display: flex;
  gap: 42px;
`

PushForm.FormTypes = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 32px;
`

PushForm.Buttons = styled.div`
  display: flex;
  justify-content: end;
  gap: 28px;
  margin-top: 32px;
`

export default PushForm
