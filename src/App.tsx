import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Profile1 from "./pages/Profile1";
import InUseStandardBank from "./pages/InUseStandardBank";
import InUseAbsa from "./pages/InUseAbsa";
import InUseNedbank from "./pages/InUseNedbank";
import Profile from "./pages/Profile";
import InUseFNB from "./pages/InUseFNB";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import Promt from "./pages/Promt";
import Splash from "./pages/Splash";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/in-use-standard-bank":
        title = "";
        metaDescription = "";
        break;
      case "/in-use-absa":
        title = "";
        metaDescription = "";
        break;
      case "/in-use-nedbank":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/in-use-fnb":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/add-card":
        title = "";
        metaDescription = "";
        break;
      case "/promt":
        title = "";
        metaDescription = "";
        break;
      case "/splash":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Profile1 />} />

      <Route path="/in-use-standard-bank" element={<InUseStandardBank />} />

      <Route path="/in-use-absa" element={<InUseAbsa />} />

      <Route path="/in-use-nedbank" element={<InUseNedbank />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/in-use-fnb" element={<InUseFNB />} />

      <Route path="/home" element={<Home />} />

      <Route path="/add-card" element={<AddCard />} />

      <Route path="/promt" element={<Promt />} />

      <Route path="/splash" element={<Splash />} />
    </Routes>
  );
}
export default App;
