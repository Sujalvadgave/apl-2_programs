import React from 'react';
import './App.css';  // Import the traditional external CSS file

import styled from 'styled-components';  // For CSS-in-JS (Styled Components)

// Inline styles in JavaScript object format
const inlineContainerStyle = {
  padding: '20px',
  backgroundColor: '#f4f4f4',
  textAlign: 'center',
};

const inlineHeadingStyle = {
  fontSize: '36px',
  color: '#333',
};

// Styled component for CSS-in-JS method
const StyledContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  text-align: center;
`;

const StyledHeading = styled.h1`
  font-size: 36px;
  color: #333;
`;

function App() {
  return (
    <div className="external-container"> {/* External CSS applied */}
      <h1 className="external-heading">Hello from External CSS</h1>
      <p className="external-text">This paragraph is styled using external CSS.</p>
      
      {/* Inline styles applied */}
      <div style={inlineContainerStyle}>
        <h1 style={inlineHeadingStyle}>Hello from Inline CSS</h1>
        <p style={{ color: '#666', fontSize: '18px' }}>This paragraph is styled using inline CSS.</p>
      </div>

      {/* CSS-in-JS applied via Styled Components */}
      <StyledContainer>
        <StyledHeading>Hello from CSS-in-JS (Styled Components)</StyledHeading>
        <p>This paragraph is styled using styled-components (CSS-in-JS).</p>
      </StyledContainer>
    </div>
  );
}

export default App;
