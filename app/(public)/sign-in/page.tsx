"use client";

import { login } from "@/lib/api";

const SignIn = () => {
  const handleSubmit = async (formData: FormData) => {
    try {
      await login({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={handleSubmit}>
      <h1>Sign in</h1>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default SignIn;
