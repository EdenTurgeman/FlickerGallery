import styled from "styled-components";
import {Card, CardMedia} from "@material-ui/core";

export const StyledImageCard = styled(Card)`
    position: relative;
    margin: 10px;
    height: 300px;
    width: 300px;
`;

export const StyledCardMedia = styled(CardMedia)`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
`;

export const StyledDescription = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 0;
  z-index: 20;
  background-color: rgba(66, 66, 66, 0.7);
`;