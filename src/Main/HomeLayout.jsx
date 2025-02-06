import Banner from "../Components/Banner";
import Header from "../Components/Header";

const HomeLayout = () => {
  return (
    <div className="bg-bg text-text" >
      <div className="max-w-5xl mx-auto p-2">
        <Header></Header>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default HomeLayout;
