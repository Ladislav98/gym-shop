import { Button } from "../../utils/styles/generalStyles";
import {
  HamburgerItem,
  HamburgerNav,
  HamburgerNavList,
} from "./HamburgerMenuStyle";
import PropTypes from "prop-types";

const HamburgerMenu = ({
  hamburgerItems,
  isOpen,
  onOpen,
  isLoggedIn,
  onLogOut,
}) => {
  function handleLogoutOpen() {
    onLogOut();
    onOpen();
  }
  return (
    <HamburgerNav isOpen={isOpen}>
      <HamburgerNavList>
        <Button onClick={onOpen}>X</Button>
        {hamburgerItems.map((item, index) => (
          <HamburgerItem key={index} to={item.path} onClick={onOpen}>
            {item.title}
          </HamburgerItem>
        ))}
        {isLoggedIn ? (
          <>
            <HamburgerItem to={"/bmi"} onClick={onOpen}>
              BMI
            </HamburgerItem>
            <HamburgerItem to={"/"} onClick={handleLogoutOpen}>
              Log out
            </HamburgerItem>
          </>
        ) : (
          <>
            <HamburgerItem to={"/sign-in"} onClick={onOpen}>
              Sign in
            </HamburgerItem>
            <HamburgerItem to={"/register"} onClick={onOpen}>
              Register
            </HamburgerItem>
          </>
        )}
      </HamburgerNavList>
    </HamburgerNav>
  );
};
HamburgerMenu.propTypes = {
  hamburgerItems: PropTypes.array,
  isOpen: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  onOpen: PropTypes.func,
  onLogOut: PropTypes.func,
};
export default HamburgerMenu;
