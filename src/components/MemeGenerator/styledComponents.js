import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: #35469c;
  border-radius: 12px;
  color: #ffffff;
  padding: 6px 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #2d3b84;
  }
`

export const CustomItem = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  min-width: 500px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: ${props => props.fontSize}px;
  color: #fff;
  text-align: center;
`
