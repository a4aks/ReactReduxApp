import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/auth/auth.api";
import { useToast } from "@chakra-ui/react";
import { Button, Input, Flex} from "@chakra-ui/react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authState = useSelector((state) => state.auth);
  const { isLoading, error, isUserLoggedIn } = authState;
  const toast = useToast();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (!isLoading) {
      e.preventDefault();
      dispatch(login({ email, password }));
    }
  };

  useEffect(() => {
    if (authState.error) {
      toast({
        title: `Something went wrong`,
        status: "error",
        isClosable: true,
      });
    } else if (authState.isUserLoggedIn) {
      toast({
        title: `Logged-in Successfully`,
        status: "success",
        isClosable: true,
        position: "top-right",
      });
    }
  }, [toast, authState]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex maxW="400px" justifyContent="center" alignItems="center">
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </Flex>
        <div>
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
