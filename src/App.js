import Auth from "./Pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Privateroute from "./Components/Routes/Privateroute";
import store from "./Redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Privateroute />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Provider>
  );
}

export default App;
