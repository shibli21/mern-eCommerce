import { Text } from "@chakra-ui/core";

interface MenuItemsProps {}

const MenuItems: React.FC<MenuItemsProps> = ({ children }) => (
  <Text
    mt={{ base: 4, md: 0 }}
    mr={6}
    display="block"
    textTransform="uppercase"
  >
    {children}
  </Text>
);

export default MenuItems;
