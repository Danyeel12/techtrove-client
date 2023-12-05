import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1800px; // Adjust max-width as needed
  margin: 0 auto; // Center the content
  padding: 0 20px; // Apply consistent padding
  width: 100%; // Use full width
  
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
