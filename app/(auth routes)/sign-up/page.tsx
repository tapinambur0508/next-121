"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { register } from "@/lib/api";

import { useAuthStore } from "@/stores/authStore";

import { APIError } from "@/app/api/api";

const SignUp = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const [error, setError] = useState<string | undefined>(undefined);

  const handleSubmit = async (formData: FormData) => {
    try {
      const user = await register({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        userName: formData.get("userName") as string,
      });

      if (user) {
        setUser(user);
        router.push("/profile");
      } else {
        setError("Oops... Something went wrong");
      }
    } catch (error) {
      setError(
        (error as APIError).response?.data?.error ??
          (error as APIError).message ??
          "Oops... Something went wrong",
      );
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
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
