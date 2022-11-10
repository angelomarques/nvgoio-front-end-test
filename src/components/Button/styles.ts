import styled from "styled-components";

export const Button = styled.button`
    font-size: 14px;
    font-family: "Lato", sans-serif;
    background-color: ${props => props.theme.palette.gray['900']};
    color: ${props => props.theme.palette.white.main};
    width: 100%;
    text-align: center;
    padding: 10px;
    border: none;
    border-radius: 4px;
`