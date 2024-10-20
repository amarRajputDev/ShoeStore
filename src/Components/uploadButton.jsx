"use client"
import React from 'react';
import { useState } from 'react';

export default function UploadButton() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      setImageUrl(data.url); // Display or store the uploaded image URL
      alert('Image uploaded successfully');
    } else {
      console.error('Error:', data.message);
      alert('Failed to upload image');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>

      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}
