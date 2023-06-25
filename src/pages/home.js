import BackgroundChange from "../Hooks/backgroundChange";

const Home = () => {
  const backgroundImage = BackgroundChange();
  return (
    <>
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>hello world</h1>
      </div>
    </>
  );
};

export default Home;
