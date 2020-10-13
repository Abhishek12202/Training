import styled from 'styled-components'

const AppStyle = styled.div`
    color: pink;
    background-color: yellow;
    border: ${({isActive})=> isActive ? '1px solid black' : '3px dotted green'}
`

export default AppStyle