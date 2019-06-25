import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
  VERIFIED,
  PASSWORD
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const email = useInput("");
  const password2 = useInput("");
  const password3 = useInput("");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value }
  });
  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      password2: password2.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });
  const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value
    }
  });

  const verifiedMutation = useMutation(VERIFIED, {
    variables: {
      email: email.value
    }
  });

  const localLogInMutation = useMutation(LOCAL_LOG_IN);

  const password2Mutation = useMutation(PASSWORD, {
    variables: { email: email.value, password2: password2.value }
  });

  const onSubmit = async e => {
    e.persist();
    if (action === "logIn") {
      const {
        data: { verified }
      } = await verifiedMutation();
      if (email.value !== "" && password2.value !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();

          //패스워드 체크하는거
          const {
            data: { checkPassword: passCheck }
          } = await password2Mutation();

          if (requestSecret === "no") {
            toast.error("이메일 또는 비밀번호가 일치하지 않습니다");
            return false;
          } else if (verified === true) {
            if (passCheck === true) {
              const getTest = localLogInMutation({
                variables: { token: requestSecret }
              });
              console.log(getTest, "getTest");
              return false;
            } else {
              toast.error("비번일치 놉");
            }
          } else {
            if (passCheck === true) {
              toast.success("Check your inbox for your login secret");
              setAction("confirm");
            } else {
              toast.error("비번일치 놉");
            }
          }
        } catch {
          toast.error("Can't request secret, try again");
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        password2.value !== "" &&
        password3.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        if (password2.value !== password3.value) {
          toast.error("비밀번호가 일치하지 않습니다");
          return false;
        }
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("이미 사용된 email 입니다");
            return false;
          } else {
            toast.success("Account created! Log In now");
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All field are required");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token }
          } = await confirmSecretMutation();
          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("Cant confirm secret,check again");
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      password2={password2}
      password3={password3}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
