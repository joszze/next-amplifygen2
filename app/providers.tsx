"use client";
import { Amplify } from "aws-amplify";
import { PropsWithChildren } from "react";
import outputs from "@/amplify_outputs.json";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";

Amplify.configure(outputs, {
  ssr: true, // required when using Amplify with Next.js
});

export const client = generateClient<Schema>();

export default function Providers({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <ThemeProvider colorMode="dark">
      <Authenticator>
        <div className={className}>{children}</div>
      </Authenticator>
    </ThemeProvider>
  );
}
//from  the client-side you can fetch the current user with
//const { user, signOut } = useAuthenticator();
