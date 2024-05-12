import React from "react";
import styled from "styled-components";

const ToolbarCont = styled.div`
   border: 1px solid green;
   display: flex;
   padding: 1rem 2rem;
   justify-content: center;
`;

export const Toolbar = () => {
   return <ToolbarCont>Grid App</ToolbarCont>;
};
