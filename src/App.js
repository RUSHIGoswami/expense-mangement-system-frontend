import Auth from "./Pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;
