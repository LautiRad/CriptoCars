import Image from "next/image";
import { useState } from "react";

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState({});
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }

  return (
    <div>
      <Image width={250} height={150} src={preview} alt="img" />
    </div>
  );
};

export default PreviewImage;
