import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import outputs from "@/amplify_outputs.json";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { Schema } from "@/amplify/data/resource";
import { cookies } from "next/headers";
import { getCurrentUser } from "aws-amplify/auth/server";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});

export async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });
    return currentUser;
  } catch (error) {
    console.error(error);
  }
}
