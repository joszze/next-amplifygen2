"use client";
import { FileUploader, StorageImage } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
// import { getUrl } from "aws-amplify/storage";
// const a = await getUrl({
// path: "public/test.jpg",
// options: { bucket: "firstBucket" },
// // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
// });

export default function Upload() {
  return (
    <>
      <FileUploader
        acceptedFileTypes={["image/*"]}
        path="public/"
        maxFileCount={1}
        isResumable
      />
      <StorageImage alt="cat" path="public/test.png" validateObjectExistence />
    </>
  );
}
