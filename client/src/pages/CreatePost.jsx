import React from "react";
import { FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p- max-w-3xl mx-auto min-h-screen">
      <h1 className="my-7 text-center text-3xl font-bold font-inter">
        Create a post
      </h1>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1 font-inter text-3xl"
          />

          <Select className="cursor-pointer font-inter">
            <option value="uncategorized" className="cursor-pointer">
              Select a category
            </option>
            <option value="javascript">Javascript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-dotted border-teal-500 p-3">
          <FileInput type="file" accept="image/*" className="font-inter" />
          <button
            type="submit"
            className="rounded-md px-4 py-2 border-2 border-[#03aaff] font-medium font-inter"
          >
            Upload image
          </button>
        </div>

        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
        />

        <button
          type="submit"
          className="bg-[#03aaff] rounded-md px-4 py-2 border-2 border-[#03aaff] font-medium font-inter text-white text-xl"
        >
          Publish
        </button>
      </form>
    </div>
  );
}
