import styled from "styled-components"
import trash from "../../../assets/img/icons/Trash.svg"
import CustomSelect from "../../../components/select"
import {
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormUnregister,
  UseFormWatch,
} from "react-hook-form"
import { ChangeEvents, ISegment } from "./Segmentation"
import SegmentValues from "./SegmentValues"
import { useState } from "react"
import { SEGMENT_OPTIONS } from "../../../models/options"

type SegmentProps = {
  errors: FieldErrors
  setValue: UseFormSetValue<FieldValues>
  watch: UseFormWatch<FieldValues>
  unregister: UseFormUnregister<FieldValues>
  id: string
  deleteSegment: (id: string) => void
}

const Segment = ({
  errors,
  setValue,
  id,
  deleteSegment,
  watch,
}: SegmentProps) => {
  const [viewIn, setViewIn] = useState("")

  const values = watch()

  const handleChange = (e: ChangeEvents) => {
    if ("value" in e && e?.value) {
      setViewIn(e?.value)
      const segments = values["segmentation"].map((item: ISegment) =>
        item.id === id ? { ...item, type: e?.value } : item,
      )
      setValue("segmentation", segments)
    }
  }

  return (
    <Segment.Wrapper>
      <div className="main-segment">
        <CustomSelect
          options={SEGMENT_OPTIONS}
          errors={errors}
          setValue={setValue}
          isOnChange={handleChange}
          isDark
        />
        <img src={trash} alt="delete" onClick={() => deleteSegment(id)} />
      </div>
      <SegmentValues
        errors={errors}
        setValue={setValue}
        watch={watch}
        viewIn={viewIn}
        id={id}
      />
      <Segment.Share />
    </Segment.Wrapper>
  )
}

Segment.Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .main-segment {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  img {
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
`

Segment.Share = styled.div`
  border-bottom: 1px solid #536274;
  margin: 24px 0;
`

export default Segment
