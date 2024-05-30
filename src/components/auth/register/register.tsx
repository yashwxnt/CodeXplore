"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import CardWrapper from "../card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams, redirect } from "next/navigation";
import axios from "axios";

const RegisterForm = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const role = searchParams.get("role");

  useEffect(() => {
    if (!role) {
      redirect("/auth/chooserole");
    }
  }, [role]);

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    try {
      console.log("register: ", data);
      const response = await axios.post(
        `http://localhost:4500/${role}/signup`, // Update the endpoint based on your backend setup
        {
          username: data.name,
          email: data.email,
          password: data.password,
        },
        // {
        //   withCredentials: true,
        // }
      );
      if (response.data.message) {
        alert(response.data.message);
        window.location.href = `/auth/login?role=${role}`; // Redirect to login page with the role
      } else {
        alert(response.data.error);
      }
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert('Server is down. Please try again later.');
      }
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      label={`Create an account as ${role}`}
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here."
      forgotPasswordHref="/auth/forgotpassword"
      forgotPasswordLabel="Forgot password?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;