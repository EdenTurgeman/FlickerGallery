import styled from "styled-components";
import {InputBase, Paper} from "@material-ui/core";

export const StyledSearchBarPaper = styled(Paper)`
  &&{
    border-radius: 50px;
  }
  height: 50px;
  width: 35%;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin-bottom: 10px;
`;

export const StyledSearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 8%;
`;

export const StyledInputBase = styled(InputBase)`
    width: 100%;
`;