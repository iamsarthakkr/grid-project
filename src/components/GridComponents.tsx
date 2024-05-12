import styled from "styled-components";
import { FlexRow } from "./Common";

export const GridRow = styled(FlexRow)<{ height: number }>`
   justify-content: center;
   width: 100%;
   height: ${(props) => `${props.height}px`};
`;
