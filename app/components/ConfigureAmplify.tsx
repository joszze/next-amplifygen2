// components/ConfigureAmplify.tsx
"use client";

import { Amplify } from "aws-amplify";

import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

import "@aws-amplify/ui-react/styles.css";

export default function ConfigureAmplifyClientSide() {
  return null;
}
