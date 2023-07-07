import Select, { MultiValue, SingleValue } from "react-select"
import styled from "styled-components"
import {
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form"
import { ISegment } from "../../view/push/compounds/Segmentation"
import { ChangeEvent } from "react"

export interface IOptions {
  label: string
  value: string
}

type CustomSelectProps = {
  options: IOptions[]
  isDisabled?: boolean
  isLoading?: boolean
  isClearable?: boolean
  isRtl?: boolean
  isSearchable?: boolean
  placeholder?: string
  isDark?: boolean
  registerName?: string
  errorName?: string
  isRequired?: boolean
  isMulti?: boolean
  errors: FieldErrors
  setValue: UseFormSetValue<FieldValues>
  watch?: UseFormWatch<FieldValues>
  isOnChange?: (e: ISegment | IOptions | ChangeEvent<HTMLInputElement>) => void
}

const CustomSelect = ({
  options,
  isDisabled,
  isLoading,
  isClearable,
  isRtl,
  isSearchable = false,
  placeholder,
  isDark,
  errors,
  registerName,
  isRequired,
  errorName,
  setValue,
  isMulti = false,
  watch,
  isOnChange,
}: CustomSelectProps) => {
  const values = watch && watch()

  const handleChange = (e: SingleValue<IOptions> | MultiValue<IOptions>) => {
    if (!registerName) return
    if (Array.isArray(e) && isMulti) {
      return setValue(registerName, e)
    }
    if (e && "value" in e) {
      return setValue(registerName, e.value)
    }
  }

  return (
    <StyledSelect isDarkTheme={isDark}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        placeholder={placeholder || "Select..."}
        options={options}
        name={registerName}
        onChange={isOnChange ? (e) => isOnChange(e) : (e) => handleChange(e)}
        isMulti={isMulti}
        value={
          isMulti && registerName ? values?.[registerName] || [] : values?.label
        }
        required={isRequired}
      />
      {isRequired && registerName && errors[registerName] && (
        <CustomSelect.Error>{errorName}</CustomSelect.Error>
      )}
    </StyledSelect>
  )
}

const StyledSelect = styled.div<{ isDarkTheme?: boolean }>`
  width: 100%;
  .select__control {
    background: ${({ isDarkTheme }) =>
      isDarkTheme ? "rgba(34, 40, 47, 1)" : "#323a47"};
    border: 1px solid #536274;
    min-height: 46px;
    cursor: pointer;
    padding-left: 20px;
  }
  .select__single-value {
    color: #fff;
    font-size: 16px;
    margin: 0;
  }

  .select__value-container {
    padding: 0;
  }

  .select__indicator-separator {
    display: none;
  }

  .select__indicator {
    color: #4e5788;
  }

  .select__menu {
    background: #323a47;
  }

  .select__option {
    background: #323a47;
    color: #fff;

    &:hover {
      background: #536274;
      cursor: pointer;
    }
  }

  .select__multi-value {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 8px;
    background: #4e5788;
    color: #fff;
    height: 27px;

    .select__multi-value__remove {
      &:hover {
        background: none;
        color: darkcyan;
      }
    }
  }

  .select__clear-indicator {
    display: none;
  }

  .select__multi-value__label {
    color: #fff;
    font-weight: 600;
    font-size: 14px;
  }
`

CustomSelect.Error = styled.div`
  color: rgba(218, 70, 73, 1);
  margin-top: 4px;
`

export default CustomSelect
