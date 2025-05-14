"use client";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import axios from "axios";
import { use, useEffect, useState } from "react";

export default function useEffectPage() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
        console.log(response);
        setMovieList(response.data.results);
      })
      .catch(() => {
        alert("เกิดข้อผิดพลาดในการดึงข้อมูล");
      });
  }, []);
  console.log(movieList);
  return (
    <div>
      <MenuBar page={"เรียนรู้ useEffect"} />
      <div className="p-4 bg-blue-500 ">
        <img
          src={
            "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
          }
          alt="หนังดี"
        />
        <h2>หนังดี</h2>
      </div>
      {movieList}
      <Footer />
    </div>
  );
}
