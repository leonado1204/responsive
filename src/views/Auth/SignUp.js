// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import FormInput from "./components/FormInput";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import { useEffect, useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import { mapStoreToProps, mapDispatchToProps, components } from "store/storeToProps";
import { connect } from "react-redux";
import { useAuthContext } from "context/auth";
import { useMutation } from "react-query";

import { signup, login } from "service/apiCaller";
import SnackbarUtils from "utils/SnackbarUtils";

function SignUp(props) {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

  const { user, setUser } = useAuthContext();
  const [formData, setFormData] = useState({ });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const loginmutation = useMutation(login, {
    onSuccess: (response) => {
      if (response?.data?.status) {
        props.login(response);
        setUser(
          {
            ...user,
            ...response?.data?.data,
            isAuthenticated: response?.data?.code == 200 ? true : false,
            token: response?.data?.tokens?.access,
            refreshToken: response?.data?.tokens?.refresh,
            tokenLife: Math.floor(Date.now() / 1000),
          },
          () => {
            if (response?.data?.code == 200) {
              window.location.replace("/dashboard");
            } else {
              window.location.replace("/email-verify");
            }
          }
        );
      }
    },
  });

  const mutation = useMutation(signup, {
    onSuccess: (response) => {
      if (response?.data?.status) {
        SnackbarUtils.success(response?.data?.message);
      }
    },
  });
  const { isSuccess, isLoading, isError, error: serverError, data: serverResponse } = mutation;

  const validate = () => {
    if (!formData.url) {
      setError("Please enter url address.");
      return false;
    } else if (formData.url !== "") {
      const pattern = /^(https?|ftp):\/\/([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+([?#\/].*)?$/i;
      if (!pattern.test(formData.url)) {
        setError("Please enter a valid url.");
        return false;
      }
    }    
    if (!formData.firstName) {
      setError("Please enter first name.");
      return false;
    } else if (formData.lastName === "") {
      setError("Please enter last name.");
      return false;
    }
    if (!formData.email) {
      setError("Please enter email address.");
      return false;
    } else if (formData.email !== "") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(formData.email)) {
        setError("Please enter a valid email address.");
        return false;
      }
    }
    if (!formData.password) {
      setError("Please enter password.");
      return false;
    }
    setError("");
    return true;
  };

  const onClickRegister = () => {
    if (validate()) {
      const payload = {
        password: formData.password
      };
      const formObj = { ...formData };
      delete formObj.password;
      payload.email = JSON.stringify(formObj);
      mutation.mutate(payload);
    }
  };

  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          Welcome!
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        {user && user.token ? (
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            You are already signed in.
          </Text>
        ) : (
          <Flex
            direction='column'
            w='445px'
            background='transparent'
            borderRadius='15px'
            p='40px'
            mx={{ base: "100px" }}
            bg={bgColor}
            boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
            <Text fontSize='xl' color={textColor} fontWeight='bold' textAlign='center' mb='22px'> Register </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'> Website url </FormLabel>
              <FormInput placeholder='https://' name="url" onChange={handleChange} />
              
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'> First name </FormLabel>
              <FormInput placeholder='First name' name="firstName" onChange={handleChange} />

              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'> Last name </FormLabel>
              <FormInput placeholder='last name' name="lastName" onChange={handleChange} />

              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'> Email </FormLabel>
              <FormInput type='email' placeholder='Email address' name="email" onChange={handleChange} />

              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'> Password </FormLabel>
              <FormInput type='password' placeholder='Password' name="password" onChange={handleChange} />

              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'> Confirm password </FormLabel>
              <FormInput type='password' placeholder='Confirm password' name="confirm_password" onChange={handleChange} />

              <FormControl display='flex' alignItems='center' mb='24px'>
                <Switch id='remember-login' colorScheme='teal' me='10px' checked={rememberMe} onClick={() => { setRememberMe(!rememberMe) }} />
                <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'> Remember me </FormLabel>
              </FormControl>
              {
                (error !== "") &&
                <Flex
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  maxW='100%'
                  mt='0px'>
                  <Text color="red" marginBottom="15px" fontWeight='medium'>
                    {error}
                  </Text>
                </Flex>  
              }
              <Button
                onClick={onClickRegister} type='submit' bg='teal.300' fontSize='10px' color='white' fontWeight='bold' w='100%' h='45' mb='24px' _hover={{bg: "teal.200"}} _active={{bg: "teal.400"}}> SIGN UP </Button>
            </FormControl>
            <Flex flexDirection='column' justifyContent='center' alignItems='center' maxW='100%' mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Already have an account?
                <Link color={titleColor} ms='5px' href='/auth/signin' fontWeight='bold'> Sign In </Link>
              </Text>
            </Flex>
          </Flex>)}
      </Flex>
    </Flex>
  );
}

const WIndicatorPanel = connect(
  mapStoreToProps(components.AUTH),
  mapDispatchToProps(components.AUTH)
)(SignUp);

export default WIndicatorPanel;