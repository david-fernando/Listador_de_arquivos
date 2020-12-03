import styled from 'styled-components'

const SelectFolder = styled.button`
    display: block;
    border-style: dashed;
    border-width: 1pt;
    border-color: #9e9e9e;
    background: #ffff;
    width: 91vw;
    height: 47vh;
    margin-top: 10px;
    text-align: center;
    line-height: 50vh;
    font-size: 12pt;
    font-family: sans-serif;
    color: #9e9e9e;

    &:focus{
        outline: none;
    }

    ${props =>{ if(props.error===true) return `color: #c1807e` }
    }
`

export default SelectFolder