"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ForgotPasswordSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useSearchParams, redirect } from "next/navigation";
import CardWrapper from "../card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useFormStatus } from "react-dom";

const ForgotPasswordForm = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const role = searchParams.get("role");

  useEffect(() => {
    if (!role) {
      redirect("/auth/chooserole");
    }
  }, [role]);

  const form = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
      NewPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ForgotPasswordSchema>) => {
    setLoading(true);
    try {
      console.log("forgotPassword: ", data.email, data.NewPassword, data.confirmPassword, role);
      const response = await axios.post(
        `http://localhost:4500/${role}/forgotpassword`,
        {
          email: data.email,
          NewPassword: data.NewPassword,
          confirmPassword: data.confirmPassword,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.message) {
        window.location.href = `/auth/login?role=${role}`;
        console.log(response.data);
        alert(response.data.message);
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

  const { pending } = useFormStatus();
  return (
    <CardWrapper
      label="Enter a new Password"
      title="Forgot password"
      backButtonHref={`/auth/register?role=${role}`}
      backButtonLabel="Don't have an account? Register here."
      forgotPasswordHref={`/auth/login?role=${role}`}
      forgotPasswordLabel="have an account? Login"
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
              name="NewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
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
          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ForgotPasswordForm;