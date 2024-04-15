import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { useEffect } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  ReloadData,
  SetPortfolioData,
  ShowLoading,
} from "./redux/rootSlice";
function App() {
  // const [showLoading, setShowLoading] = useState(false); -> Temporary static check
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://deploy-mern-api.vercel.app/register", {
        name,
        email,
        password,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();
  const getPortfolioData = useCallback(async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/truder-portfolio");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      console.error("Failed to fetch portfolio data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [getPortfolioData, portfolioData]);

  useEffect(() => {
    if (!reloadData) {
      getPortfolioData();
    }
  }, [getPortfolioData, reloadData]);
  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
