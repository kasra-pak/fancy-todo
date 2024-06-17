import styled from "styled-components";

import moonImg from "@assets/images/icon-moon.svg";
import sunImg from "@assets/images/icon-sun.svg";
import userImg from "@assets/images/icon-user.svg";

const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  max-width: 540px;
  margin-block: clamp(2.7em, 7vw, 4.25em) clamp(1.8em, 5vw, 2.25em);
  margin-inline: auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.generalColors.white};
  font-size: ${({ theme }) => theme.fonts.font3};
  text-transform: uppercase;
  letter-spacing: clamp(10px, 1.5vw, 13px);
  line-height: 1;
`;

const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
`;

const UserIcon = styled.div`
  width: clamp(20px, 3.5vw, 27px);
  aspect-ratio: 1;
  background-image: url(${userImg});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Dropdown = styled.div`
  background: ${({ theme }) => theme.variationColors.bg2};
  position: absolute;
  top: 100%;
  right: 3%;
  color: ${({ theme }) => theme.generalColors.black};
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
`;

const UserName = styled.div`
  color: ${({ theme }) => theme.generalColors.color1};
  width: max-content;
  text-transform: capitalize;
  margin-bottom: 0.5em;
`;

const LogoutButton = styled.button`
  background: ${({ theme }) => theme.variationColors.bg2};
  color: ${({ theme }) => theme.variationColors.text1};
  border: 1.5px solid ${({ theme }) => theme.variationColors.text1};
  border-radius: ${({ theme }) => theme.roundBorder};
  padding: 0.5em 1em;
  transition: background-color 0.3s ease;
  cursor: pointer;
`;

const ThemeToggler = styled.button`
  background-image: ${({ theme }) =>
    theme.name === "light" ? `url(${moonImg})` : `url(${sunImg})`};
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  width: clamp(20px, 3.5vw, 27px);
  aspect-ratio: 1;
  cursor: pointer;
  transition: background-image 0.2s ease;
`;

export {
  Wrapper,
  Title,
  User,
  UserIcon,
  Dropdown,
  UserName,
  LogoutButton,
  ThemeToggler,
};
