import { useEffect, useState } from "react";

export default function Modal({ image, onClose }) {
  //判斷橫向or直向
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    if (image) {
      //因為url只是路徑，無法取得圖片長寬資訊資訊
      //透過建立一個圖片物件來取得圖片長寬資訊
      const img = new Image();
      img.src = image.url;
      //圖片加載完成後要執行的事情
      img.onload = () => {
        // 判斷是橫式照片(true)還是直式(false)
        setIsLandscape(img.width > img.height);
      };
    }
  }, [image]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-stone-900 bg-opacity-95">
      <div
        className="absolute right-5 top-5 flex items-center justify-center bg-slate-700 px-4 py-3 text-xl text-white hover:cursor-pointer"
        onClick={onClose}
      >
        <p>close</p>
      </div>
      <div className="flex items-center justify-center rounded-md">
        <img
          src={image.url}
          alt={image.keywords[0]}
          className={`${isLandscape ? "w-4/5 lg:w-2/3" : "w-3/4 lg:w-3/5"} rounded-md border-8 border-white`}
        />
      </div>
    </div>
  );
}
