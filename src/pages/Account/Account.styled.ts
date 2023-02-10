import styled from "styled-components";
import color from "utils/color";
export const Container = styled.div`
  background-color: ${color.backgroundColor};
  display: flex;
  justify-content: center;
  padding: 2em;
  gap: 8em;
`;
export const Sidebar = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 1em;
`;
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const SidebarHeader = styled.div`
  display: flex;
  gap: 1em;
`;
export const SidebarHeaderImg = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50%;
  object-fit: cover;
`;
export const SidebarInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: ${color.whiteColor};
`;
export const UserName = styled.h1`
  font-size: 1.5em;
`;
export const UserEmail = styled.p`
  font-size: 1.5em;
  opacity: 0.8;
`;
export const AccountContainer = styled.div`
  display: flex;
  gap: 5em;
  padding: 2em 5em;
  align-items: flex-start;
  background-color: ${color.backgroundItemColor};
  .ant-input {
    width: 30em;
  }
  .ant-form-item-label label {
    color: ${color.whiteColor};
    min-width: 10em;
  }
  .ant-input-disabled {
    color: ${color.whiteColor};
  }
`;
export const UploadAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
`;
export const AvatarUser = styled.img`
  width: 15em;
  height: 15em;
  border-radius: 50%;
  object-fit: cover;
`;
