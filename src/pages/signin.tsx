import React, { useRef, useState } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { FiMail, FiLock } from "react-icons/fi"

import { Header } from "../components/Header";
import { CustomizedInput } from "../components/Form/Input";
import { Logo } from "../components/Logo";
import { auth } from "../firebase/firebaseSetup";
import Router from "next/router";

export default function SignIn() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('')
    setLoading(true)
    try {
      const user = await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      alert(`Welcome back! ${user.user.email}`);
      localStorage.setItem("@cryptoGrow:userUID", JSON.stringify(user.user.uid))
      Router.push("/userpanel-wallet")
    } catch (error) {
      setError('Failed to log in')
      console.log("error", error);
      localStorage.setItem("@cryptoGrow:userUID", JSON.stringify(null))
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
        <Flex
          width="420px"
          height="600px"
          backgroundColor="gray.900"
          borderRadius="1.125rem"
          flexDirection="column"
          alignItems="center"
        >
          <form onSubmit={signIn} style={
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              height: '100%'
            }}>
            <Logo __marginTop="75px" logoColor="purple.400" />
            {error && <Text color='pink.700' backgroundColor="rgba(255,49,129,0.1)">{error}</Text>}
            <CustomizedInput
              __marginTop="54px"
              icon={FiMail}
              name="email"
              id="email"
              type="email"
              placeholder="email"
              __color="white"
              __height="60px"
              __width="340px"
              ref={emailRef}
            />
            <CustomizedInput
              type="password"
              name="password"
              id="password"
              icon={FiLock}
              placeholder="password"
              __marginTop="54px"
              __color="white"
              __height="60px"
              __width="340px"
              ref={passwordRef}
            />
            <Button
              type='submit'
              width="320px"
              height="72px"
              fontSize="1.5rem"
              borderRadius="36px"
              bgGradient="linear(to-r, pink.700, gray.700)"
              color="white"
              marginTop="54px"
              variant="unstyled"
              disabled={loading}
            >
              SIGN IN
            </Button>
          </form>
        </Flex>
      </Flex>
    </>
  )
}