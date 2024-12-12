import { getUrl } from "aws-amplify/storage/server";
import Image from "next/image";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";

// Re-render this page every 60 minutes
export const revalidate = 60 * 60; // in seconds

export default async function StaticallyRenderedPage() {
  try {
    const splashUrl = await runWithAmplifyServerContext({
      nextServerContext: null,
      operation: (contextSpec) =>
        getUrl(contextSpec, {
          path: "public/Screenshot 2024-12-11 054357.png",
        }),
    });

    return (
      <Image
        src={splashUrl.url.toString()}
        alt="Splash Image"
        width={500}
        height={500}
      />
    );
  } catch (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }
}
