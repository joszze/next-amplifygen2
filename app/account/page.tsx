import { cookies } from "next/headers";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";

// This page always dynamically renders per request
export const dynamic = "force-dynamic";

export default async function AuthGetCurrentUserServer() {
  try {
    if (!(await cookies()).get("amplify-token")) {
      return <p>You are not logged in</p>;
    }
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });

    return <p>{JSON.stringify(currentUser)}</p>;
  } catch (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }
}
