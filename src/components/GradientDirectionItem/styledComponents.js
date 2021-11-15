// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.button`
  height: 35px;
  width: 90px;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')}
  background-color: #ffffff;
  border-radius: 6px;
  border-width: 0px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-right: 20px;
  margin-top: 20px;
`
export const ListItem = styled.li`
  list-style-type: none;
`
