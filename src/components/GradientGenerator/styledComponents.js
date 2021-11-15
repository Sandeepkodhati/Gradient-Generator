// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientColor});
  padding: 20px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  color: white;
`

export const DirectionDescription = styled.p`
  color: #ededed;
  font-size: 20px;
  font-family: 'Roboto';
`

export const PickColorDescription = styled.p`
  color: #ededed;
  font-size: 20px;
  font-family: 'Roboto';
`

export const UnorderedList = styled.ul`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    width: 300px;
  }
`

export const ChangeColorContainer = styled.div`
  display: flex;
`

export const ColorBox = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GenerateButton = styled.button`
  height: 30px;
  width: 120px;
  margin-top: 20px;
  margin-bottom: 50px;
  border-radius: 6px;
  border-width: 0px;
  background-color: #00c9b7;
  color: #334155;
`
export const CustomColorDescription = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: #ededed;
`

export const CustomInput = styled.input`
  height: 70px;
  width: 100px;
  border: none;
  background-color: transparent;
  border-radius: 10px;
`
