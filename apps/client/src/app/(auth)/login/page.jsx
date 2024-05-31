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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { get } from "http";
import { login } from "@app/client/data/auth/auth";
import useMutation from "@app/client/hooks/use-mutation";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Wrong email ",
  }),
  password: z.string().min(4, {
    message: "Password must be 8 characters long",
  }),
});
function Login() {
  const router = useRouter();
  const { isMutating, startMutation } = useMutation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      Password: "",
    },
  });
  function onSubmit(values) {
    startMutation(async () => {
      await login(values);
    });
  }

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
      <div className="py-48  " style={{"padding-left":"60rem"}}>
        <Form {...form} className="">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-stone-700 font-semibold text-lg  border-gray-500 border-2 rounded-lg  w-fit p-10"
          >
            <p className="mb-4 font-semibold text-3xl border-b-2 py-4 border-b-gray-500 ">
              Login{" "}
            </p>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="w-96 border-b-black mb-2" placeholder="" {...field} />
                  </FormControl>
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
                    <Input className="w-96 border-b-black text-slate-900" placeholder="" type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="mt-5 ml-16 text-white text-base  bg-pink-900 w-64 "
              type="submit"
              disabled={isMutating}
            >
              Submit
            </Button>
            <div className="py-5 text-sm">
              If you don't have account
              <Link href="/register" className="underline text-pink-700 ml-2 ">register here</Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
export default Login;
