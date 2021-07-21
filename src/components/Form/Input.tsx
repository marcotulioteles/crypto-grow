import { FormControl, FormHelperText, FormLabel, InputProps as ChakraInputProps, Input as ChakraInput } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";


interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
({ name, label, error = null, ...rest }: InputProps) => {
  return (
    <FormControl>
      <ChakraInput 
        name={name}
        id={name}
        backgroundColor="none"
        outline="none"
        border="none"
        flex="1"
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)