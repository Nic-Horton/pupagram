import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, Button, InputGroup, InputRightElement, Alert, AlertIcon } from "@chakra-ui/react"
import { useState } from "react";
import useSignUpWithEmailPassword from "../../hooks/useSignUpWithEmailPassword";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName:"",
    username:"",
    email:"",
    password:"",
  });
  const [showPassword, setShowPassword] = useState(false);
  const {loading, error, signup} = useSignUpWithEmailPassword()

  return (
    <>
      <Input
          placeholder="Email"
          fontSize={14}
          type="email"
          value={inputs.email}
          size={"sm"}
          onChange={(e)=> setInputs({...inputs, email:e.target.value})}
          focusBorderColor='#ec9d59'
        />

        <Input
          placeholder="Username"
          fontSize={14}
          type="text"
          value={inputs.username}
          size={"sm"}
          onChange={(e)=> setInputs({...inputs, username:e.target.value})}
          focusBorderColor='#ec9d59'
        />

        <Input
          placeholder="Full Name"
          fontSize={14}
          type="text"
          value={inputs.fullName}
          size={"sm"}
          onChange={(e)=> setInputs({...inputs, fullName:e.target.value})}
          focusBorderColor='#ec9d59'
        />

        <InputGroup>
          <Input
            placeholder="Password"
            fontSize={14}
            type={showPassword ? "text" : "password"}
            value={inputs.password}
            size={"sm"}
            onChange={(e)=> setInputs({...inputs, password:e.target.value})}
            focusBorderColor='#ec9d59'
          />
          <InputRightElement h={"full"}>
            <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
            </Button>
          </InputRightElement>
        </InputGroup>

        {error && (
          <Alert status="error" fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12}/>
            {error.message}
          </Alert>
        )}

        <Button w={"full"} colorScheme="orange" size={"sm"} fontSize={14} 
          isLoading={loading}
          onClick={() => signup(inputs)}
        >
          Sign up
        </Button>
    </>
  )
}

export default Signup