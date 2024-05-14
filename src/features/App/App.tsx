import React from "react";
import { Toolbar } from "../Toolbar";
import { Grid } from "../Grid";
import styled from "styled-components";
import { FlexCol } from "../../components";
import { AppContextProvider } from "./AppContextProvider";

const Container = styled(FlexCol)`
   width: 100vw;
   height: 100vh;
`;

function App() {
   return (
      <AppContextProvider>
         <Container>
            <Toolbar />
            <Grid />
         </Container>
      </AppContextProvider>
   );
}

export default App;
