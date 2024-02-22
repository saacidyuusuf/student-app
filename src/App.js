import { Route, Routes } from "react-router-dom";
import StudentFaculties from "./pages/StudentFaculties";
import Register from "./pages/Register";
import Students from "./pages/students";
import Mainnav from "./component/layouts/Mainnav";

const App = () => {
  return (
    <div>
    <Mainnav />
    <Routes>
      <Route path="/" element={<Students />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/appliedstudents" element={<StudentFaculties />}></Route>
    </Routes>
    </div>
  );
};

export default App;
