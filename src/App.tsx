import Card from "./components/Card";

function App(): JSX.Element {
  return (
    <div className="bg-040711 bg-bg-hero bg-top xl:bg-[length:100%] bg-no-repeat h-screen flex flex-col items-center">
      <img
        src="./src/assets/logo.svg"
        alt="logo"
        className="relative my-[3.25rem] top-10"
      />
      <div className="px-6 lg:px-[4.5rem] flex flex-col gap-4 xl:flex-row w-full py-[3.25rem]">
          <Card num={1}/>
          <Card/>
      </div>
    </div>
  );
}

export default App;