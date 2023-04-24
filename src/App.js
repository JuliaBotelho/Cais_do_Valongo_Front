import { 
  Routes, 
  BrowserRouter as Router,
  Route,
  BrowserRouter
} from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import HistoricInfoPage from "./pages/HistInfoPage";
import GeologicInfoPage from "./pages/GeoInfoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import QuizzPage from "./pages/QuizzPage";
import BookingPage from "./pages/TourBookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import AuthProvider from "./contextElements/auth";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <GlobalStyle />
      <AuthProvider>
      <Header/>
        <Routes>
          <Route path="/" element={<HistoricInfoPage/>}/>
          <Route path="/geoinfo" element={<GeologicInfoPage/>}/>
          <Route path="/quizz" element={<QuizzPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<RegisterPage/>}/>
          <Route path="/reserva" element={<BookingPage/>}/>
          <Route path="/confirmado" element={<ConfirmationPage/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
