"use client";
import { Amplify } from "aws-amplify";
import { PropsWithChildren } from "react";
import outputs from "@/amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs, {
  ssr: true, // required when using Amplify with Next.js
});
export default function Providers({ children }: PropsWithChildren) {
  return (
    <Authenticator>
      <>{children}</>
    </Authenticator>
  );
}
