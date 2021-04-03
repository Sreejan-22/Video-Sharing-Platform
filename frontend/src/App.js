import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GenrePanel from "./components/Genre Panel/GenrePanel";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [currentGenre, setGenre] = useState([1, 0, 0, 0, 0]);
  const [currentAgeGroup, setAgeGroup] = useState([1, 0, 0, 0, 0]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortBy, setSortBy] = useState("uploaded-date");

  function handleFilterByGenre(data) {
    setGenre(data);
  }

  function handleFilterByAge(data) {
    setAgeGroup(data);
  }

  function onSearch(keyword) {
    setSearchKeyword(keyword);
  }

  function onSort(val) {
    setSortBy(val);
  }

  return (
    <>
      <Header onSearch={onSearch} />
      <GenrePanel
        genre={currentGenre}
        ageGroup={currentAgeGroup}
        onGenreChange={handleFilterByGenre}
        onAgeGroupChange={handleFilterByAge}
        onSort={onSort}
      />
      <Dashboard
        genre={currentGenre}
        ageGroup={currentAgeGroup}
        searchKeyword={searchKeyword}
        sortBy={sortBy}
      />
    </>
  );
}

export default App;
