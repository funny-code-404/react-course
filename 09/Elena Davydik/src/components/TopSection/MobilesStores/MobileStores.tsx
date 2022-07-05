import styled from "styled-components";
import googlePlay from "../../../assets/mobile-stores/google-play.svg";
import appStore from "../../../assets/mobile-stores/app-store.svg";
import { memo } from "react";

export const MobileStores = memo(() => {
  return (
    <StyledMobileStores>
      <img src={googlePlay} alt="Google Play" />
      <img src={appStore} alt="App Store" />
    </StyledMobileStores>
  );
});

const StyledMobileStores = styled.div`
  width: 270px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
