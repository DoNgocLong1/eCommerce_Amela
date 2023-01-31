import styled from "styled-components";
import images from "assets/images";
import { Link } from "react-router-dom";
import color from "utils/color";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${images.loginBackground});
  background-position: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5em;
  justify-content: center;
  align-items: center;
  padding: 4em 2.5em;
  background-color: ${color.whiteColor};
  border-radius: 2.5em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .ant-input-affix-wrapper {
    padding: 1em 1.5em;
    font-size: 1.3em;
    width: 20em;
  }
  .ant-btn-primary {
    padding: 0.5em 5em;
    height: 100%;
  }
`;

export const LoginTitle = styled.h1`
  font-size: 2em;
  color: #000;
`;
export const LoginFeatureLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  padding: 1em 0;
`;
export const ForgotPassword = styled(Link)`
  font-size: 1em;
  text-decoration: underline;
  color: #474747;
`;

export const Registry = styled(ForgotPassword)`
  color: orange;
  text-decoration: none;
`;
