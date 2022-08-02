import "./App.css";

import categories from "./Api";
import Row from "./components/Row/index";
import Banner from "./components/Banner/index";
import Nav from "./components/Nav/index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {/* Em Alta */}
      {categories.map((category) => {
        return (
          <Row
            key={category.nome}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
