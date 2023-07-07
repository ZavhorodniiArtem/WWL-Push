import styled from "styled-components"

type CustomButtonProps = {
  isOutline?: boolean
  title: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

const CustomButton = ({
  isOutline,
  title,
  onClick,
  type = "button",
}: CustomButtonProps) => {
  return (
    <CustomButton.Button isOutline={isOutline}>
      <button type={type} onClick={onClick}>
        {title}
      </button>
    </CustomButton.Button>
  )
}

CustomButton.Button = styled.div<{ isOutline?: boolean }>`
  width: fit-content;

  button {
    background: ${({ isOutline }) => (isOutline ? "inherit" : "#DA4649")};
    color: ${({ isOutline }) => (isOutline ? "#DA4649" : "#fff")};
    border: ${({ isOutline }) => (isOutline ? "1px solid #DA4649" : "none")};
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: ${({ isOutline }) =>
        isOutline ? "rgba(50, 58, 71, 1)" : "rgba(218, 70, 73, 0.75)"};
    }
  }
`

export default CustomButton
