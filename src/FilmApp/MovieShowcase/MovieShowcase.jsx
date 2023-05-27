import React from "react";
import "../MovieShowcase/MovieShowcase.css";
import "../Shared/Icon";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";

const trending = [
  "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
  "https://static.tvtropes.org/pmwiki/pub/images/img_3124_73.jpeg",
  "https://www.themoviedb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
  "https://myhotposters.com/cdn/shop/products/HP2406_e6732c54-9558-4c84-8fd8-855550e33d52_1024x1024.jpg?v=1571444851",
  "https://images2.thanhnien.vn/528068263637045248/2023/5/26/spider-man-across-the-spider-verse-poster-16850724641101103572976.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZGFkYzhmOWEtZTlkYi00ZTVkLWI5ZmQtY2IxOTkxMGU4ZWFmXkEyXkFqcGdeQXVyNjg5MjgxODQ@._V1_.jpg",
];
const anime = [
  "https://m.media-amazon.com/images/I/91VivF555eL.jpg",
  "https://www.themoviedb.org/t/p/original/z1D8xi9x4uEhyFruo7uEHXUMD4K.jpg",
  "https://cdn-amz.woka.io/images/I/71DRngOUBAS.jpg",
  "https://cdn.hmv.com/r/w-640/hmv/files/7e/7e218362-fccb-4eea-9d9a-f8df684538ec.jpg",
  "https://upload.wikimedia.org/wikipedia/vi/4/42/%C3%81p_ph%C3%ADch_phim_Nh%E1%BA%AFn_g%E1%BB%ADi_m%E1%BB%99t_t%C3%B4i%2C_ng%C6%B0%E1%BB%9Di_%C4%91%C3%A3_y%C3%AAu_em.jpg",
  "https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg",
  "https://pbs.twimg.com/media/FSn0GtSXwAA0Uy8.jpg:large",
];
const comedy = [
  "https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/230599_GROWN%20UPS%20_2010_1400x2100_English.jpg?itok=Wumkl75R",
  "https://m.media-amazon.com/images/M/MV5BMzlhZGM5ODUtMTU1MS00MjQ5LWJkNGQtY2RhYzkyZjFmZTBlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZGQ2MjBjNDEtYWVlNi00Nzc3LTg2NjUtYWY3ZTkwNTAwNDQyXkEyXkFqcGdeQXVyMTk3NDAwMzI@._V1_.jpg",
  "https://flxt.tmsimg.com/assets/p34622_p_v8_ai.jpg",
  "https://image.invaluable.com/housePhotos/Chaucer/41/673641/H4586-L210621173.jpg",
];
function MovieShowcase(props) {
  return (
    <div className="MovieContainer">
      <div className="Trending">
        <h3 className="heading">Trending</h3>
        <div style={{ display: "flex" }}>
          {trending.map((poster, index) => (
            <div key={index}>
              <img src={poster} alt=" " />
            </div>
          ))}
        </div>
        <div className="LeftSlideBtn">
          <FiChevronLeft></FiChevronLeft>
        </div>
        <div className="RightSlideBtn">
          <FiChevronRight></FiChevronRight>
        </div>
      </div>
      <div className="Anime">
        <h3 className="heading">Anime</h3>
        <div style={{ display: "flex" }}>
          {anime.map((poster, index) => (
            <div key={index}>
              <img src={poster} alt=" " />
            </div>
          ))}
        </div>
        <div className="LeftSlideBtn">
          <FiChevronLeft></FiChevronLeft>
        </div>
        <div className="RightSlideBtn">
          <FiChevronRight></FiChevronRight>
        </div>
      </div>
      <div className="Comedy">
        <h3 className="heading">Comedy</h3>
        <div style={{ display: "flex" }}>
          {comedy.map((poster, index) => (
            <div key={index}>
              <img src={poster} alt=" " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MovieShowcase;
