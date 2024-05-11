import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../../components";

const GridContainer = styled(FlexContainer)`
   border: 1px solid blue;
   justify-content: center;
   flex: 1;
`;

export const Grid = () => {
   return <GridContainer>grid</GridContainer>;
};
