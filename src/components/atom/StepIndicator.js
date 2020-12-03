import styled from 'styled-components'

const StepIndicator = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  align-items: center;
  color: #0063c6;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding-left: 26pt;

  ${props => props.secondstep === true?`
    background: #f5f5f5;
    height: -5px;
    box-sizing: content-box;
    border-style: solid;
    border-top-width:8.6vh;
    border-bottom-width:8vh;
    border-bottom-color: #f5f5f5;
    border-top-color: #f5f5f5;
    border-right-color: #f5f5f5;
    border-left-color: #d8d8d8;
    border-left-width: 20pt;
  `:`
    height:100%;
    background: #d8d8d8;
  `
  }
`

export default StepIndicator