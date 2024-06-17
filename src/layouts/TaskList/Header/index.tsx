import React, { FC, useState } from "react";
import * as S from "./Header.styled";
import { useSelector } from "react-redux";
import { selectAuthToken } from "@reducers/rootReducer";
import { jwtDecode } from "jwt-decode";

interface Props {
  toggleTheme: () => void;
}

const Header: FC<Props> = ({ toggleTheme }) => {
  const authToken = useSelector(selectAuthToken);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const decodedAuthToken: {
    user?: {
      id?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
    };
  } = authToken ? jwtDecode(authToken) : {};

  console.log("decodedAuthToken", decodedAuthToken);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <S.Wrapper>
      <S.Title>todo</S.Title>

      {authToken && (
        <S.User onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <S.UserIcon />

          {isDropdownVisible && (
            <S.Dropdown>
              <S.UserName>{decodedAuthToken?.user?.firstName}</S.UserName>

              <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
            </S.Dropdown>
          )}
        </S.User>
      )}

      <S.ThemeToggler onClick={toggleTheme} />
    </S.Wrapper>
  );
};

export default Header;
