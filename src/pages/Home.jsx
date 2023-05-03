
import Filters from "../components/Filters";
import Tour from "../components/Tour";
import { useEffect, useState } from "react";
function Home() {

    console.log("home");
    const categories = ["все", "горящие", "по россии"];

    // переменная, в зависимости от которой происходит ререндер
    const [tours, setTours] = useState([]);
    // дождись, пока статус промиса станет "выполнено" и результат положи в data
    // запрос к серверу 

    // действие, которое происходит при определенных обстоятельствах (например, при смене значения стейта и т.д.)

    useEffect(() => {
      console.log('use effect');
      fetch("https://64381f19f3a0c40814ab6315.mockapi.io/tours")
      .then((response) => response.json())
      .then(data => {setTours(data); console.log("data changed")});
    }, []); // пустой массив - происходит при первом рендере
    return (
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
    );
}

export default Home;