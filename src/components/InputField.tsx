import { FormControl, FormErrorMessage, FormLabel, Input, useColorMode } from "@chakra-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
};

const InputField: React.FC<InputFieldProps> = ({ size: _, label, ...props }) => {
  const [field, { error }] = useField(props);
  const { colorMode } = useColorMode();
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} borderRadius={0} bg={colorMode === "dark" ? "gray.900" : "white"} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
