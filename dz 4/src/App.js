import React from 'react'
import styled from 'styled-components'
import Strip from './Components/Strip/Strip'

const App = () => {
  const widthRangeSlider = 500
  const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: ${widthRangeSlider}px;
  margin: auto;
`;

  return (
    <div>
      <Wrapper>
        <Strip widthRangeSlider={widthRangeSlider} />
      </Wrapper>
    </div>
  )
}

export default App;
