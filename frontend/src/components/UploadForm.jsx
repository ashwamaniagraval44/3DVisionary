import React, { useState } from "react";
import { uploadObject } from "../services/api";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      await uploadObject(formData);
      alert("Upload successful!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
