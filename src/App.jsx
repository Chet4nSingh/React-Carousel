function App() {
  return (
    <>
      <h1 className="text-9xl">Carousel</h1>
      <main>
        <div id="carousel-container">
          <div id="slides">
            <div id="slide-one"></div>
            <div id="slide-two"></div>
            <div id="slide-three"></div>
          </div>
          <div id="btns">
            <button id="prev"></button>
            <button id="next"></button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
