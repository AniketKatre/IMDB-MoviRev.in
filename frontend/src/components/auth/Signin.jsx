import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { CustomLink } from "../CustomLink";
// import { ThemeContext } from "../../context/ThemeProvider";
import { useTheme } from "../../hooks/theme";
import { commonModalClasses } from "../../utils/theme";
import FormContainer from "../form/FormContainer";

export const Signin = () => {
  // const theme = useTheme();
  // // console.log(theme);
  // theme.method();

  return (
    <>
      <FormContainer>
        <Container>
          {/* <form className="bg-slate-800  rounded p-6 w-80 space-y-6"> */}
          <form className={commonModalClasses + " w-80"}>
            <Title>Sign In</Title>

            <FormInput
              label="Email"
              placeholder="katreaniket3@gmail.com"
              name="email"
            />

            <FormInput
              label="Password"
              placeholder="********"
              name="password"
            />

            <Submit value="Sign In" />

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
