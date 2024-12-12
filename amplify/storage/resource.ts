import { defineStorage } from "@aws-amplify/backend";

export const firstBucket = defineStorage({
  name: "firstBucket",
  isDefault: true, // identify your default storage bucket (required)
});
