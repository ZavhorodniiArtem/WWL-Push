import styled from "styled-components"
import CustomSelect from "../../../components/select"
import {
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form"
import Input from "../../../components/input"
import { ChangeEvents } from "./Segmentation"
import { ISegment } from "../../../models/types"

type SegmentValuesProps = {
  errors: FieldErrors
  setValue: UseFormSetValue<FieldValues>
  watch: UseFormWatch<FieldValues>
  viewIn: string
  id: string
}

const SegmentValues = ({
  setValue,
  watch,
  errors,
  viewIn,
  id,
}: SegmentValuesProps) => {
  const values = watch()

  const handleChange = (e: ChangeEvents, type: string) => {
    const newSegments = values?.segmentation?.map((item: ISegment) => {
      if (item.id === id) {
        return {
          ...item,
          values: {
            ...item?.values,
            [type]:
              type === "count" && "target" in e
                ? e?.target?.value
                : "value" in e && e?.value,
          },
        }
      }
      return item
    })
    setValue("segmentation", newSegments)
  }

  if (!viewIn) return

  if (viewIn === "deposit") {
    return (
      <SegmentValues.Wrapper>
        <div className="selects">
          <CustomSelect
            options={[
              { label: "Да", value: "yes" },
              { label: "Нет", value: "no" },
            ]}
            isDark
            errors={errors}
            setValue={setValue}
            isOnChange={(e) => handleChange(e, "isDeposit")}
          />
        </div>
      </SegmentValues.Wrapper>
    )
  }

  if (viewIn === "days") {
    return (
      <SegmentValues.Wrapper>
        <div className="selects">
          <CustomSelect
            options={[{ label: "Регистрация", value: "registration" }]}
            isDark
            errors={errors}
            setValue={setValue}
            isOnChange={(e) => handleChange(e, "registration")}
          />
        </div>
        <div className="selects">
          <CustomSelect
            options={[
              { label: "Больше", value: "bigger" },
              { label: "Меньше", value: "smaller" },
            ]}
            isDark
            errors={errors}
            setValue={setValue}
            isOnChange={(e) => handleChange(e, "moreOrLess")}
          />
        </div>
        <div className="selects">
          <Input
            errors={errors}
            isOnChange={(e) => handleChange(e, "count")}
            themeBg="dark"
            placeholder="Колличество"
          />
        </div>
      </SegmentValues.Wrapper>
    )
  }

  if (viewIn === "lastActive") {
    return (
      <SegmentValues.Wrapper>
        <div className="selects">
          <CustomSelect
            options={[
              { label: "Больше", value: "bigger" },
              { label: "Меньше", value: "smaller" },
            ]}
            isDark
            errors={errors}
            setValue={setValue}
            isOnChange={(e) => handleChange(e, "moreOrLess")}
          />
        </div>
        <div className="selects">
          <Input
            errors={errors}
            isOnChange={(e) => handleChange(e, "count")}
            themeBg="dark"
            placeholder="Колличество"
          />
        </div>
      </SegmentValues.Wrapper>
    )
  }
}

SegmentValues.Wrapper = styled.div`
  display: flex;
  margin-top: 12px;
  width: 95%;
  gap: 8px;

  .selects {
    width: 30%;
  }
`

export default SegmentValues
