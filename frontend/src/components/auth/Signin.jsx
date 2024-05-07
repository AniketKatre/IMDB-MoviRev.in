import React, { useEffect, useState } from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { CustomLink } from "../CustomLink";
// import { ThemeContext } from "../../context/ThemeProvider";
import { useAuth, useNotification, useTheme } from "../../hooks/theme";
import { commonModalClasses } from "../../utils/theme";
import FormContainer from "../form/FormContainer";
import { useNavigate } from "react-router-dom";
// import user from "../../../../backend/models/user";

const validateUserInfo = ({ email, password }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail.test(email)) return { ok: false, error: "Invalid email!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long!" };

  return { ok: true };
};

export const Signin = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { updateNotification } = useNotification();
  const { handleLogin, authInfo } = useAuth();
  console.log(authInfo);
  const { isPending, isLoggedIn } = authInfo;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);

    if (!ok) return updateNotification("error", error);
    handleLogin(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    // we want to move out user to somewhere else\
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  return (
    <>
      <FormContainer>
        <Container>
          {/* <form className="bg-slate-800  rounded p-6 w-80 space-y-6"> */}
          <form
            onSubmit={handleSubmit}
            className={commonModalClasses + " w-80"}
          >
            <Title>Sign In</Title>

            <FormInput
              value={userInfo.email}
              onChange={handleChange}
              label="Email"
              placeholder="katreaniket3@gmail.com"
              name="email"
            />

            <FormInput
              value={userInfo.password}
              onChange={handleChange}
              label="Password"
              placeholder="********"
              name="password"
              type="password"
            />

            <Submit value="Sign In" busy={isPending} />

            <div className="flex justify-between">
              <CustomLink to="/auth/forget-password">
                Forget Password
              </CustomLink>

              <CustomLink to="/auth/signup">Sign Up</CustomLink>
            </div>
          </form>
        </Container>
      </FormContainer>
      ;
    </>
  );
};
