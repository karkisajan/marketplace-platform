import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterForm() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-4 py-16">
      <form className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <Link href="/" className="inline-block text-3xl font-bold">
            Lumina
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-black">Create account</h1>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="firstName"
                className="mb-1.5 block text-sm font-semibold text-black"
              >
                First name
              </label>
              <Input
                id="firstName"
                placeholder="First name"
                className="h-11 rounded-md border-zinc-200"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-1.5 block text-sm font-semibold text-black"
              >
                Last name
              </label>
              <Input
                id="lastName"
                placeholder="Last name"
                className="h-11 rounded-md border-zinc-200"
              />
            </div>
          </div>

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
              htmlFor="phone"
              className="mb-1.5 block text-sm font-semibold text-black"
            >
              Phone number
            </label>
            <Input
              id="phone"
              inputMode="tel"
              placeholder="Phone number"
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

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm font-semibold text-black"
            >
              Confirm password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="h-11 rounded-md border-zinc-200"
            />
          </div>

          <Button className="h-11 w-full rounded-md bg-black font-semibold text-white hover:bg-zinc-900">
            Sign up
          </Button>

          <p className="pt-2 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-black">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
