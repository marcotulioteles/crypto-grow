import React, { useRef, useState } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useForm } from 'react-hook-form'
import { FiUser, FiMail, FiLock } from "react-icons/fi"

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from "../components/Header";
import { CustomizedInput } from "../components/Form/Input";
import { auth } from "../firebase/firebaseSetup";
import Router from "next/router";

const signUpFormSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  email: yup.string().required('e-mail is required').email('format e-mail invalid'),
  password: yup.string().required('password is required'),
  retypePassword: yup.string().required('password is required'),
})

export default function SignUp() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, formState } = useForm({
    resolver: yupResolver(signUpFormSchema)
  })

  const { errors } = formState

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const retypePasswordRef = useRef<HTMLInputElement>(null)

  // const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
  //   // event.preventDefault();

  //   try {
  //     if (firebaseInstance) {
  //       const user = await firebaseInstance
  //         .auth()
  //         .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
  //       console.log("user", user);
  //       alert(`Sign Up ${emailRef.current.value} successful!`);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //     alert(error.message);
  //   }
  // };

  const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('')
    setLoading(true)
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      alert(`Account successful created!`);
      Router.push("/signin")
    } catch (error) {
      setError('Failed to create account!')
      console.log("error", error);
    }
    setLoading(false)
  };

  return (
    <>
      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="calc(100vh - 100px)"
      >
        <form onSubmit={signUp}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <Flex
            width="420px"
            height="736px"
            backgroundColor="gray.900"
            borderRadius="1.125rem"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              fontSize="2rem"
              fontWeight="600"
              marginTop="36px"
              marginLeft="50px"
            >
              New <br /> Account
            </Text>
            {error && <Text color='pink.700' backgroundColor="rgba(255,49,129,0.1)">{error}</Text>}
            <CustomizedInput
              __marginTop="42px"
              icon={FiUser}
              name="name"
              id="name"
              type="text"
              placeholder="name"
              __color="white"
              __height="60px"
              __width="340px"
              error={errors.name}
              {...register('name')}
              ref={nameRef}
            />
            <CustomizedInput
              __marginTop="42px"
              icon={FiMail}
              name="email"
              id="email"
              type="email"
              placeholder="email"
              __color="white"
              __height="60px"
              __width="340px"
              error={errors.email}
              {...register('email')}
              ref={emailRef}
            />
            <CustomizedInput
              type="password"
              name="password"
              id="password"
              icon={FiLock}
              placeholder="password"
              __marginTop="42px"
              __color="white"
              __height="60px"
              __width="340px"
              error={errors.password}
              {...register('password')}
              ref={passwordRef}
            />
            <CustomizedInput
              type="password"
              name="retypePassword"
              id="retypePassword"
              icon={FiLock}
              placeholder="retype password"
              __marginTop="42px"
              __color="white"
              __height="60px"
              __width="340px"
              error={errors.retypePassword}
              {...register('retypePassword')}
              ref={retypePasswordRef}
            />
            <Button
              type='submit'
              width="320px"
              height="72px"
              fontSize="1.5rem"
              borderRadius="36px"
              bgGradient="linear(to-r, pink.700, gray.700)"
              color="white"
              marginTop="42px"
              variant="unstyled"
              disabled={loading}
            >
              SIGN UP
            </Button>
          </Flex>
        </form>
      </Flex>
    </>
  )
}