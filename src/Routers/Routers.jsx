import { BrowserRouter, Routes, Route } from "react-router";
import HomeLayout from "../Main/HomeLayout";
import ProjectDetails from "../Components/ProjectDetails";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeLayout></HomeLayout>} ></Route>
        <Route path="/post/:id" element={<ProjectDetails></ProjectDetails>} ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
