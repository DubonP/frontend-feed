import styled from "styled-components";

export const AppHome = styled.div`
  font-family: "Apercu Arabic Pro";
  text-align: center;
  background-color: #fafafa;
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Pinkhappy1 = styled.div`
  position: absolute;
  left: 10%;
  top: 80%;
  height: 9.5rem;
  width: 9.5rem;
  background: #f472b7;
  border-radius: 50%;
  display: inline-block;
  z-index: 1;
  overflow: hidden;
`;

export const WorldBackground = styled.div`
  position: absolute;
  right: -10%;
  top: -10%;
  border-radius: 50% 0 0 70%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  @media (max-width: 880px) {
    right: -20%;
    top: -10%;
    height: 80%;
    border-radius: 50%;
  }
  @media (max-width: 677px) {
    right: -30%;
    top: -10%;
    height: 75%;
    border-radius: 50%;
  }
`;

export const Pinkhappy2 = styled(Pinkhappy1)`
  position: absolute;
  left: 70%;
  top: 50%;
  @media (max-width: 677px) {
    left: 70%;
    top: 50%;
  }
`;

export const FeedbackConteiner = styled.div`
  position: absolute;
  left: 10%;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0;
  padding: 0;
  height: 60%;
  width: 40%;
  background: transparent;
  border: 0;
  @media (max-width: 1175px) {
    width: 55%;
  }
  @media (max-width: 621px) {
    width: 70%;
    left: 8%;
  }
  @media (max-width: 511px) {
    width: 84%;
    left: 8%;
  }
  input {
    position: relative;
    align-self: left;
    box-sizing: border-box;
    width: 100%;
    height: 25%;
    background-color: #fafafa;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    margin-bottom: 0.2rem;
    padding-left: 2rem;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    z-index: 2;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  h3 {
    position: relative;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 130%;
    color: #3e3e3e;
    margin-top: 1rem;
  }
`;

export const TextArea = styled.textarea`
  position: relative;
  align-self: left;
  box-sizing: border-box;
  width: 100%;
  height: 40%;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background-color: #fafafa;
  margin-bottom: 0.2rem;
  padding: 2rem 0rem 0rem 2rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  z-index: 2;
`;

export const Button = styled.button`
  position: relative;
  left: 0px;
  background-color: #fad34f;
  color: #ffffff;
  border: 0;
  border-radius: 500px;
  width: 180px;
  height: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;
  &:hover {
    background-color: #f472b7;
  }
`;
