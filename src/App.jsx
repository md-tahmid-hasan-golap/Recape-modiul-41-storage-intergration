import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";
const bottlesPromised = fetch("./boottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <h1>Bye Awesome Water Bottls</h1>
      <Suspense fallback={<h2>Bottles Are Loading ...</h2>}>
        <Bottles bottlesPromised={bottlesPromised}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
