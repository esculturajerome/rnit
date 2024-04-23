// components/BlogImages.js

import React, { useEffect, useState } from "react";

const BlogImages = () => {
  const folderName = "ACelebrationOfLoveAndLegacy";
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/blogimages?folder=${folderName}`);
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [folderName]);

  console.log(images);

  return (
    <div>
      sample
      {images.map((fileName, index) => (
        <img
          key={index}
          src={`/blogs/${folderName}/${fileName}`}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default BlogImages;
