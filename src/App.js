import "./App.css";
import "./style/index.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Tour from "./components/Tour";
import tours from "./data/tours.json";

// функциональный компонент
function App() {
  console.log(tours);
  // запрос на бэк
  const categories = ["все", "горящие", "по россии"];

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <h2>КАТАЛОГ ТУРОВ</h2>

          <Filters categories={categories} activeIndex={0} />

          <section className="tours">
            <div className="" style={{ marginTop: "2rem" }}>
              {tours.map((t) => (
                <Tour key={t.id} {...t} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
