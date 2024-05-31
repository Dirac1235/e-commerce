"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@app/client/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@app/client/components/ui/form";
import { Input } from "@app/client/components/ui/input";

import { register } from "@app/client/data/auth/auth";
import { useRouter } from "next/navigation";
import useMutation from "@app/client/hooks/use-mutation";

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Wrong email ",
    }),
    password: z.string().min(6, {
      message: "Password must be 8 characters long",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be 8 characters long",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const route = useRouter();
  const { isMutating, startMutation } = useMutation();

  function onSubmit(values) {
    const { confirmPassword, ...rest } = values;
    startMutation(async () => {
      const res = await register(rest);
      console.log({ res });
      if (res.error) {
        alert(JSON.stringify(res.error));
        return;
      }
      route.push("/dashboard");
    });
  }

  return (
      
      <div className=" bg-cover bg-center h-screen" 
      style={{ backgroundImage: "url('/register.jpg')" }}
      
      >
      {/* <div>
        <Image
          className="w-full"
          width="500"
          height="100"
          src="/register.jpg"
          alt="register"
        />
      </div> */}
      <div className="container w-full pt-8 pl-[60rem] ">
        <p className="mt-10 mb-4 font-semibold text-3xl text-pink-900 ">
          Create Account{" "}
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-slate-600 pl-1 font-semibold text-lg"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input className="w-96 bg-inherit border-b-black border-b-2" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input className="w-96 bg-inherit text-slate-900 border-b-black border-b-2" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="w-96 bg-inherit text-slate-900 border-b-black border-b-2" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input className="w-96 bg-inherit text-slate-900 border-b-black border-b-2" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input className="w-96 bg-inherit text-slate-900 border-b-black border-b-2" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input className="w-96 bg-inherit text-slate-900 border-b-black border-b-2" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip</FormLabel>
                  <FormControl>
                    <Input className="w-96 bg-inherit text-slate-900 border-b-black border-b-2" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="w-96 bg-inherit text-slate-900 border-b-black border-b-2"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
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
                    <Input
                      type="password"
                      className="w-96 bg-inherit text-slate-900 border-b-black border-b-2"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="mt-3  bg-pink-900 w-64 " type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
