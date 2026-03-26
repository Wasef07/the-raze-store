export const uploadToCloudnary = async (file: any) => {
  const cloud_name = "dgzqrqjm3";
  const upload_preset = "the_raze_store";

  const url = `https://api.cloudinary.com/v1_1/${cloud_name}/upload`;

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", upload_preset);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });

    const fileData = await response.json();
    console.log("Image Url", fileData.secure_url);

    return fileData.secure_url; // ✅ use secure_url
  } catch (error) {
    console.error("Upload failed:", error);
    return null;
  }
};

