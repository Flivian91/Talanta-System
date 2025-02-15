// app/upload/page.js
"use client"
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function UploadPage() {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    mediaUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, log the data; later, you will call your API to create a document.
    console.log("Talent submitted:", { ...formData, userId: user?.id, status: "pending" });
    alert("Submission logged in console. Connect with backend later!");
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Your Talent</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Talent Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Music, Dance)"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="url"
          name="mediaUrl"
          placeholder="Media URL (Image or Video)"
          value={formData.mediaUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description (optional)"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
