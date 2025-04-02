import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";;

const Blogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, image });
    alert("Blog post uploaded successfully!");
  };
  return (
    <>
       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload a Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border-b border-gray-300 focus:outline-none"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border-b border-gray-300 focus:outline-none"
            rows="4"
            required
          />
          <label className="flex items-center gap-2 cursor-pointer bg-gray-200 p-3 rounded-lg">
            <FaUpload className="text-gray-600" />
            <span className="text-gray-700">Upload Image</span>
            <input type="file" onChange={handleImageUpload} className="hidden" />
          </label>
          {preview && (
            <img src={preview} alt="Preview" className="mt-4 w-full h-40 object-cover rounded-lg" />
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Blogs