"use client";
import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useCreatePostMutation } from "@/graphql/generated/schema";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const accessToken = Cookies.get("accessToken");
  const [createPost, { loading, error }] = useCreatePostMutation();
  const [imagedata, setImageData] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
      try {
        // const formdata = new FormData();
        // formdata.append("file", imagedata);
        // formdata.append("upload_preset", "gv3rra7z");
        // formdata.append("cloud_name", "daheobzzn");
        // const response = await fetch(
        //   "https://api.cloudinary.com/v1_1/daheobzzn/image/upload",
        //   {
        //     method: "POST",
        //     body: formdata,
        //   }
        // )
        //   .then((res) => res.json())
        //   .catch((err) => {
        //     console.log(err);
        //   });

        const postInput = {
          title,
          content,
        };

        console.log(postInput)
        const { data } = await createPost({
          variables: {
            data: {
              title: postInput.title,
              content: postInput.content,
            },
          },
        });

        console.log("Created post:", data);
        setTitle("");
        setContent("");
      } catch (error) {
        // Handle the error, e.g., show error message
        console.error("Failed to create post:", error);
      }

  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImageData(file || null);
  };

  return (
    <div className="w-1/2 m-auto">
      <h2 className="p-5 text-2xl font-bold text-center">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <input
          type="file"
          name="file-input"
          id="file-input"
          className="block w-full text-sm border border-gray-200 rounded-md shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
          onChange={handleFileChange}
        />
        <button type="submit" disabled={loading}>
          Create Post
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error creating post: {error.message}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
