import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Pagination from "./components/Pagination";
import axios from "axios";

export default function Home() {
  //照片
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  //關鍵字
  const [keyword, setKeyword] = useState("");
  //目前所在頁數
  const [currentPage, setCurrentPage] = useState(1);
  //每頁的資料筆數
  const perPageItems = 8;
  const api =
    import.meta.env.VITE_APP_API_URL || "http://localhost:3000/images";
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await axios.get(api);
        console.log(result);

        // console.log(api);
        setImages([...result.data]);
        setFilteredImages([...result.data]);
      } catch (error) {
        console.error("取得圖片發生錯誤", error);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  //處理關鍵字
  const handleInput = (event) => {
    const newKeyWord = event.target.value;
    setKeyword(newKeyWord);
    setCurrentPage(1);
    //如果關鍵字變為空字串就顯示所有圖片
    if (newKeyWord.trim() === "") {
      setFilteredImages(images);
    }
  };
  //處理搜尋結果
  const handleSearch = (keyword) => {
    const results = filteredImages.filter((image) =>
      image.keywords.some((kw) => kw.includes(keyword)),
    );
    // console.log(results);
    setFilteredImages(results);
    setCurrentPage(1);
  };
  const totalPages = Math.ceil(filteredImages.length / perPageItems);
  const stratIndex = 0 + (currentPage - 1) * perPageItems;
  const endIndex = stratIndex + perPageItems;
  const displayImages = filteredImages.slice(stratIndex, endIndex);

  return (
    <>
      <SearchBar
        keyword={keyword}
        handleInput={handleInput}
        handleSearch={handleSearch}
      />
      <ImageGallery displayImages={displayImages} />
      <Pagination
        displayImages={displayImages.length}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
