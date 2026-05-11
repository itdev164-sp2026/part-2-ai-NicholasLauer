"use client";

import { useActionState, useState } from "react";
import { BookOpen } from "lucide-react";
import { signInAction, signUpAction } from "./actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [signInError, signInDispatch, signInPending] = useActionState(
    signInAction,
    null
  );
  const [signUpError, signUpDispatch, signUpPending] = useActionState(
    signUpAction,
    null
  );

  const isSignIn = mode === "signin";
  const error = isSignIn ? signInError : signUpError;
  const isPending = isSignIn ? signInPending : signUpPending;
  const formAction = isSignIn ? signInDispatch : signUpDispatch;

  return (
    <div className="w-full max-w-sm px-4">
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <BookOpen className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold">ITDEV-164</h1>
        <p className="text-sm text-muted-foreground">Course Dashboard</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isSignIn ? "Sign in" : "Create account"}</CardTitle>
          <CardDescription>
            {isSignIn
              ? "Enter your email and password to access the dashboard."
              : "Enter your details to create a new account."}
          </CardDescription>
        </CardHeader>

        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                autoComplete={isSignIn ? "current-password" : "new-password"}
                minLength={6}
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending
                ? isSignIn
                  ? "Signing in…"
                  : "Creating account…"
                : isSignIn
                  ? "Sign in"
                  : "Create account"}
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="w-full text-sm"
              onClick={() => setMode(isSignIn ? "signup" : "signin")}
            >
              {isSignIn
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
