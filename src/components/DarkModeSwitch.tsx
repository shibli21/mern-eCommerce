import { useColorMode, Switch, SwitchProps } from "@chakra-ui/core";

export const DarkModeSwitch = (props: SwitchProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
      size="md"
      {...props}
    />
  );
};
