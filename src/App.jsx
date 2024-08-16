import { useState } from "react";
import Slide from "./components/Slide";
import { SLIDES } from "./data";

function App() {
  const [selectedId, setSelectedId] = useState(0);

  function handlePrev() {
    if (selectedId !== 0) {
      setSelectedId((selectedId) => selectedId - 1);
      return;
    }
    setSelectedId(2);
  }

  function handleNext() {
    if (selectedId !== 2) {
      setSelectedId((selectedId) => selectedId + 1);
      return;
    }
    setSelectedId(0);
  }

  return (
    <>
      <h1 className="text-9xl mb-8"></h1>
      <main className="w-full h-2/3 bg-slate-300">
        <div
          id="carousel-container"
          className="w-1/2 bg-slate-800 h-full m-auto"
        >
          <div id="slides" className="relative m-auto w-[80%] h-[80%]">
            <Slide
              id={"slide"}
              className={SLIDES[selectedId].classes}
            />
          </div>
          <div
            id="btns"
            className="w-full flex gap-4 justify-center mt-4 text-center"
          >
            <button
              onClick={handlePrev}
              id="prev"
              className="text-2xl text-white py-2 px-4 bg-amber-900"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              id="next"
              className="text-2xl text-white py-2 px-4 bg-amber-900"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
