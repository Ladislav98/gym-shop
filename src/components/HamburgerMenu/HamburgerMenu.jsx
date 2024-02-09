import { Button } from "../../utils/styles/generalStyles";
import {
  HamburgerItem,
  HamburgerNav,
  HamburgerNavList,
} from "./HamburgerMenuStyle";
import PropTypes from "prop-types";

const HamburgerMenu = ({ hamburgerItems, isOpen, onOpen }) => {
  return (
    <HamburgerNav isOpen={isOpen}>
      <HamburgerNavList>
        <Button onClick={onOpen}>X</Button>
        {hamburgerItems.map((item, index) => (
          <HamburgerItem key={index} to={item.path} onClick={onOpen}>
            {item.title}
          </HamburgerItem>
        ))}
      </HamburgerNavList>
    </HamburgerNav>
  );
};
HamburgerMenu.propTypes = {
  hamburgerItems: PropTypes.array,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
};
export default HamburgerMenu;
