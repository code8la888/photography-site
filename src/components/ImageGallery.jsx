import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Image from "./Image";

export default function ImageGallery({ displayImages }) {
  const [selectedImage, setSelectedImage] = useState(null);
  // 打開模態框瀏覽照片
  const openModal = (image) => {
    setSelectedImage(image);
  };
  // 關閉模態框
  const closeModal = () => {
    setSelectedImage(null);
  };

  if (displayImages.length === 0)
    return <div className="mt-20 text-center">沒有符合條件結果</div>;
  return (
    <>
      <div className="grid grid-cols-1 place-content-center gap-x-5 gap-y-10 p-5 md:grid-cols-2 xl:grid-cols-4">
        {displayImages.map((image) => (
          <Image openModal={openModal} image={image} />
        ))}
      </div>
      <Modal image={selectedImage} onClose={closeModal} />
    </>
  );
}
