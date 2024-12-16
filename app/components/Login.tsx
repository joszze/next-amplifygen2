// components/Login.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";

function Login({ user }: { user?: AuthUser }) {
  console.log(user);
  if (user) return <>Welcome {user.username}</>;
  return null;
}

export default withAuthenticator(Login);
