import { FormControl, InputProps as ChakraInputProps, Input as ChakraInput, Flex, Icon } from "@chakra-ui/react";
import { ElementType, forwardRef, ForwardRefRenderFunction, ReactElement } from "react";


interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: string;
  icon: ElementType;
  __width: string;
  __height: string;
  __color: string;
  __marginTop: string;
  type: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
({ name, label, error = null, icon, __width, __height, __color, __marginTop, type, ...rest }: InputProps) => {
  return (
    <FormControl
      display="flex"
      justifyContent="center"
      marginTop={__marginTop}
    >
          <Flex 
            as="label"
            width={__width}
            height={__height}
            backgroundColor="gray.700"
            borderRadius="12px"
            border="1px solid"
            borderColor="purple.300"
            alignItems="center"
            position="relative"
          >
            <Icon 
              as={icon} 
              width="1.5rem" 
              height="1.5rem" 
              marginLeft="12px"
              position="absolute"
            />
            <ChakraInput
              id={name}
              name={name} 
              placeholder={name}
              type={type}
              variant="unstyled"
              textAlign="center"
              color={__color}
              _placeholder={{ color: "purple.400" }}
              flex="1"
            />
          </Flex>
    </FormControl>
  )
}

export const CustomizedInput = forwardRef(InputBase)