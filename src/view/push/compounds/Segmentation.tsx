import styled from "styled-components"
import {
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormUnregister,
  UseFormWatch,
} from "react-hook-form"
import Title from "../../../components/title"
import { ChangeEvent, useState } from "react"
import plus from "../../../assets/img/icons/Plus.svg"
import { nanoid } from "nanoid"
import Segment from "./Segment"
import { IOptions } from "../../../components/select"
import { ISegment } from "../../../models/types"

type SegmentationProps = {
  errors: FieldErrors
  setValue: UseFormSetValue<FieldValues>
  watch: UseFormWatch<FieldValues>
  unregister: UseFormUnregister<FieldValues>
}

export type ChangeEvents = ISegment | IOptions | ChangeEvent<HTMLInputElement>

const Segmentation = ({
  setValue,
  errors,
  watch,
  unregister,
}: SegmentationProps) => {
  const [isSegmentation, setIsSegmentation] = useState(false)

  const id = nanoid()
  const values = watch()

  const deleteSegment = (id: string) => {
    const filteredSegmentation = values["segmentation"].filter(
      (item: ISegment) => item.id !== id,
    )
    setValue("segmentation", filteredSegmentation)
  }

  return (
    <div>
      {isSegmentation ? (
        <>
          <Title title="Сегментация" withIcon />
          <Segmentation.Wrapper>
            {values?.["segmentation"]?.map((item: ISegment) => {
              return (
                <Segment
                  key={item.id}
                  errors={errors}
                  setValue={setValue}
                  watch={watch}
                  id={item.id}
                  unregister={unregister}
                  deleteSegment={deleteSegment}
                />
              )
            })}

            <Segmentation.Buttons>
              <div
                className="add"
                onClick={() =>
                  setValue("segmentation", [
                    ...values["segmentation"],
                    { id: id },
                  ])
                }
              >
                <img src={plus} alt="add" />
                <p>Добавить сегментацию</p>
              </div>
              <p
                className="clear"
                onClick={() => {
                  setIsSegmentation(false)
                  unregister("segmentation")
                }}
              >
                Очистить
              </p>
            </Segmentation.Buttons>
          </Segmentation.Wrapper>
        </>
      ) : (
        <Segmentation.Buttons>
          <div className="add">
            <img src={plus} alt="add" />
            <p
              onClick={() => {
                setIsSegmentation(true)
                setValue("segmentation", [{ id: id }])
              }}
            >
              Добавить сегментацию
            </p>
          </div>
        </Segmentation.Buttons>
      )}
    </div>
  )
}

Segmentation.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: #323a47;
  padding: 12px 20px;
`

Segmentation.Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .add {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 16px;
      color: #f0b11c;
      font-weight: 600;
    }
  }
  .clear {
    font-size: 16px;
    font-weight: 600;
    color: #da4649;
    cursor: pointer;
  }
`

export default Segmentation
