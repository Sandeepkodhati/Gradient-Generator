// Write your code here
import {CustomButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientListItem, onchangeGradientDirection, isActive} = props
  const {value, displayText} = gradientListItem

  const onClickGradientColor = () => {
    onchangeGradientDirection(value)
  }

  return (
    <ListItem>
      <CustomButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientColor}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
