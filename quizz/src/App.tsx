import React from "react";
import { GlobalStyle, Wrapper } from "./Styles/App.styles";

import { Quiz } from "./components/Quiz";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Quiz />
      </Wrapper>
    </>
  );
};
