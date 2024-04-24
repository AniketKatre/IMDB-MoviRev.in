import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { CustomLink } from "../CustomLink";
import { commonModalClasses } from "../../utils/theme";
import FormContainer from "../form/FormContainer";

export const Signup = () => {
  return (
    <>
      <FormContainer>
        <Container>
          <form className={commonModalClasses + " w-80"}>
            <Title>Sign Up</Title>

            <FormInput label="Name" placeholder="annie_jb_" name="name" />

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

            <Submit value="Sign Up" />

            <div className="flex justify-between">
              <CustomLink to="/auth/forget-password">
                Forget Password
              </CustomLink>

              <CustomLink to="/auth/signin">Sign In</CustomLink>
            </div>
          </form>
        </Container>
      </FormContainer>
      ;
    </>
  );
};
