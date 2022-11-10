import styled from "styled-components";

export const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;

  @media only screen and (min-width: 1100px) {
    flex-direction: row;
    gap: 20px;
  }

  & > form, &> section {
    flex: 1;
  }
`;
