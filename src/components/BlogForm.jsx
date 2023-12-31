"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

function BlogForm({ blogData }) {

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const onSave = async () => {

    try {

      let response;

      if (blogData) {

        response = await axios.put(`/api/blogs/${blogData.id}`, blog);

      } else {

        response = await axios.post(`/api/blogs`, blog);

      }

      toast.success(response.data.message);

      router.push("/");

    } catch (error) {

      toast.error(error.message);

    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {

    if (blogData) {
      setBlog(blogData);
    }

  }, [blogData]);

  return (
    <div className="flex flex-col gap-8">
      {loading && <Loader />}
      <div>
        <label htmlFor="title" className="text-gray-800 font-bold text-md">
          Title
        </label>

        <input
          type="text"
          placeholder="Enter Title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="description" className="text-gray-800 font-bold text-md">
          Description
        </label>

        <textarea
          type="text"
          placeholder="Enter Description"
          value={blog.description}
          onChange={(e) => setBlog({ ...blog, description: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="image" className="text-gray-800 font-bold text-md">
          Image
        </label>

        <input
          value={blog.image}
          onChange={(e) => setBlog({ ...blog, image: e.target.value })}
          type="text"
          placeholder="Enter Copy Image Link URL"
        />
      </div>

      <div className="flex justify-end gap-8">
        <button className="btn-outlined" onClick={() => router.push("/")}>
          Cancel
        </button>

        <button className="btn-contained" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default BlogForm;