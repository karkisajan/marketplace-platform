import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-4 py-16">
      <form className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <Link href="/" className="inline-block text-3xl font-bold">
            Lumina
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-black">Login</h1>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-black"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="h-11 rounded-md border-zinc-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-black"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="h-11 rounded-md border-zinc-200"
            />
          </div>

          <Button className="h-11 w-full rounded-md bg-black font-semibold text-white hover:bg-zinc-900">
            Login
          </Button>

          <div className="space-y-3 pt-1">
            <Button
              type="button"
              variant="outline"
              className="h-11 w-full rounded-md border-zinc-200 font-medium"
            >
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 w-full rounded-md border-zinc-200 font-medium"
            >
              Facebook
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 w-full rounded-md border-zinc-200 font-medium"
            >
              GitHub
            </Button>
          </div>

          <p className="pt-2 text-center text-sm text-zinc-500">
            Need an account?{" "}
            <Link href="/register" className="font-semibold text-black">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
