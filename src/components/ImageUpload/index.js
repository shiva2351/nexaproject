// ImageUpload.js
import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Make a POST request to the Cloud Vision API
      const response = await axios.post(
        `https://vision.googleapis.com/v1/images:annotate?key=YOUR_API_KEY`,
        {
          requests: [
            {
              image: {
                content: file,
              },
              features: [
                {
                  type: "PRODUCT_SEARCH",
                  maxResults: 5,
                },
              ],
            },
          ],
        }
      );

      // Handle response
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

export default ImageUpload;
