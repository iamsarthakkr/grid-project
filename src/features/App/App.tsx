import React from "react";
import { Toolbar } from "../Toolbar";
import { Grid } from "../Grid";
import styled from "styled-components";
import { FlexCol } from "../../components";

const Container = styled(FlexCol)`
   width: 100vw;
   height: 100vh;
   border: 1px solid red;
`;

function App() {
   return (
      <Container>
         <Toolbar />
         <Grid />
      </Container>
   );
}

export default App;
