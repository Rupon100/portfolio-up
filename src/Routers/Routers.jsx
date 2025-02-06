import { BrowserRouter, Routes, Route } from "react-router";
import HomeLayout from "../Main/HomeLayout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeLayout></HomeLayout>} ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
