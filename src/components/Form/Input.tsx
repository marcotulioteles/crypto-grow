import { FormControl, InputProps as ChakraInputProps, Input as ChakraInput, Flex, Icon, FormErrorMessage } from "@chakra-ui/react";
import { ElementType, forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'


interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  icon?: ElementType;
  __width: string;
  __height: string;
  __color: string;
  __marginTop?: string;
  type: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ name, label, error = null, icon, __width, __height, __color, __marginTop, type, ...rest }: InputProps, ref) => {
    return (
      <FormControl
        display="flex"
        justifyContent="center"
        marginTop={__marginTop}
      >
        <Flex
          as="label"
          width={{ base: "90%", lg: `${__width}` }}
          height={__height}
          backgroundColor="gray.700"
          borderRadius="12px"
          border="1px solid"
          borderColor="purple.300"
          alignItems="center"
          justifyContent="flex-end"
          position="relative"
        >
          {icon ?
            <Icon
              as={icon}
              width="1.5rem"
              height="1.5rem"
              marginLeft="12px"
              position="absolute"
              left="0"
            /> : ''
          }
          <ChakraInput
            id={name}
            name={name}
            placeholder={name}
            type={type}
            variant="unstyled"
            textAlign="center"
            color={__color}
            _placeholder={{ color: "purple.400", textAlign: "center"}}
            flex="1"
            ref={ref}
            {...rest}
          />
        </Flex>
        {!!error && (
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
          )}
      </FormControl>
    )
  }

export const CustomizedInput = forwardRef(InputBase);