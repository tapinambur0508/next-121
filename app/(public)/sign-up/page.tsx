"use client";

import { register } from "@/lib/api";

const SignUp = () => {
  const handleSubmit = async (formData: FormData) => {
    try {
      await register({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        username: formData.get("username") as string,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={handleSubmit}>
      <h1>Sign up</h1>
      <label>
        Username
        <input type="text" name="userName" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUp;
