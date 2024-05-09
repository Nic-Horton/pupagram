import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react"
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email:'',
    password:'',
  });
  const {loading, error, login}= useLogin()

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
          placeholder="Password"
          fontSize={14}
          type="password"
          value={inputs.password}
          size={"sm"}
          onChange={(e)=> setInputs({...inputs, password:e.target.value})}
          focusBorderColor='#ec9d59'
        />

        {error && (
          <Alert status="error" fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12}/>
            {error.message}
          </Alert>
        )}

        <Button w={"full"} colorScheme="orange" size={"sm"} fontSize={14} 
          isLoading={loading}
          onClick={() => login(inputs)}
        >
          Log in
        </Button>
    </>
  )
}

export default Login