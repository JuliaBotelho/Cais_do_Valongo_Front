import { 
  Routes, 
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import HistoricInfoPage from "./pages/HistInfoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import QuizzPage from "./pages/QuizzPage";
import BookingPage from "./pages/TourBookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <ConfirmationPage/>
    </>
  );
}

export default App;
