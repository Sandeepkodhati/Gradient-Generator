import {Component} from 'react'

import {
  GradientContainer,
  UnorderedList,
  ChangeColorContainer,
  Heading,
  DirectionDescription,
  ColorBox,
  CustomColorDescription,
  PickColorDescription,
  GenerateButton,
  CustomInput,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    gradientColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onchangeGradientDirection = value => {
    this.setState({gradientDirection: value})
  }

  onGenerateColor = () => {
    const {gradientDirection, fromColor, toColor} = this.state
    this.setState({
      gradientColor: `to ${gradientDirection}, ${fromColor}, ${toColor}`,
    })
  }

  render() {
    const {gradientColor, fromColor, toColor, gradientDirection} = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        gradientColor={gradientColor}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirectionDescription>Choose Direction</DirectionDescription>
        <UnorderedList>
          {gradientDirectionsList.map(eachList => (
            <GradientDirectionItem
              gradientListItem={eachList}
              key={eachList.directionId}
              onchangeGradientDirection={this.onchangeGradientDirection}
              isActive={eachList.value === gradientDirection}
            />
          ))}
        </UnorderedList>
        <PickColorDescription>Pick the Colors</PickColorDescription>
        <ChangeColorContainer>
          <ColorBox>
            <CustomColorDescription>{fromColor}</CustomColorDescription>
            <CustomInput
              type="color"
              value={fromColor}
              onChange={this.onChangeFromColor}
            />
          </ColorBox>

          <ColorBox>
            <CustomColorDescription>{toColor}</CustomColorDescription>
            <CustomInput
              type="color"
              value={toColor}
              onChange={this.onChangeToColor}
            />
          </ColorBox>
        </ChangeColorContainer>
        <GenerateButton type="button" onClick={this.onGenerateColor}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
