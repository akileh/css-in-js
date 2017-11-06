import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1em;
  background-color: pink;
`

const Title = styled.h1`
  font-size: 2em;
  color: indigo;
`

const Subtitle = styled.h1`
  font-size: 1em;
  color: indigo;
  font-style: italic;
`

export default props => {
  return (
    <Wrapper>
      <Title>Styled Components</Title>
      <Subtitle>Visual primitives for the component age</Subtitle>
    </Wrapper>
  )
}
