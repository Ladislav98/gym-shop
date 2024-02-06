import styled, { css } from "styled-components";
import { breakpoints, colors } from "./theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";

export const Button = styled.button`
  padding: 12px 20px;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: ${colors.white};
  transition: background-color 0.3s ease-out;
  border: none;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.issecondary &&
    `
    padding: 16px 20px;
  `}

  ${(props) =>
    props.isbmi &&
    `
    padding:8px 16px;
    background-color:#03A9F4;
  `}
  ${(props) =>
    props.isbmireset &&
    `
    padding:8px 16px;
    background-color:#607D8B;
  `}

  ${(props) =>
    props.isoutline &&
    `
    background-color: ${colors.white};
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
    margin-right:24px;
  `}

${(props) =>
    props.isadded &&
    `
    background-color: #e85a71;
    `}

  &:hover {
    background-color: ${colors.primaryDark};

    ${(props) =>
      props.isoutline &&
      `
    color: ${colors.white}; 
  `}

    ${(props) =>
      props.isadded &&
      `
    background-color: #ba485a; 
  `}

    ${(props) =>
      props.isbmi &&
      `
    background-color: #B3E5FC; 
  `}
    ${(props) =>
      props.isbmireset &&
      `
    background-color: #0d202b; 
  `}
  }
`;

//GRID

export const Grid = styled.div`
  display: grid;
  gap: 32px;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

//FORMIK
export const Form = styled(FormFormik)`
  @media screen and (${breakpoints.desktop}) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

//wrapper, unutar idu labeli i inputi, sluzi za razmake
export const FormRow = styled.div`
  margin-bottom: 32px;

  //zadnji ima 0 margin
  &:last-child {
    margin-bottom: 0;
  }
`;

const FieldStyle = css`
  border: 1px solid ${colors.black};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;

  &:focus {
    border: 2px solid ${colors.primary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

//dolle u field i select je dodan fieldstyle
export const Field = styled(FieldFormik)`
  ${FieldStyle};
`;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: #d46a6a;
  padding-top: 8px;
`;

export const FormSuccessMessage = styled.p`
  padding: 12px;
  font-size: 14px;
  color: #27ae60;
  text-align: center;
  background: rgba(111, 207, 151, 0.2);
  border-radius: 8px;
  line-height: 150%;
  ${(props) =>
    props.isError &&
    `
        color: #eb5757;
        background: rgba(235,87,87,0.2);
    `}
`;
