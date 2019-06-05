import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const requestSecret = useMutation(LOG_IN, {
    update: (_, { data }) => {
      const { requestSecret } = data;
      if (!requestSecret) {
        toast.error("아직계정이 없습니다. 계정을 만드시오! ㅎㅎ");
        setTimeout(() => setAction("signUp"), 3000);
      }
    },
    variables: { email: email.value }
  });
  const createAccount = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email !== "") {
        requestSecret();
      } else {
        toast.error("email is required!");
      }
    } else if (action === "signUp") {
      if (
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== "" &&
        email.value !== ""
      ) {
        toast.error("all field are required");
      }
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
