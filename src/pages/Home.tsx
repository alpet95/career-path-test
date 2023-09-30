import Header from "../components/layout/Header";
import Cards from "../components/interface/Cards";
import Test from "../components/interface/Test";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Cards />
        <Test />
      </main>
    </div>
  );
}

export default Home;
