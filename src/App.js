import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import ContactScreen from "./screens/ContactScreen";
import CareerScreen from "./screens/CareerScreen";
import AboutScreen from "./screens/AboutScreen";
import CategoryScreen from "./screens/CategoryScreen";
import AllCoursesScreen from "./screens/AllCoursesScreen";
import SingleCourseScreen from "./screens/SingleCourseScreen";
import ErrorScreen from "./screens/ErrorScreen";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Flex direction="column" as="main">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/careers" element={<CareerScreen />} />
            <Route path="/category/:url" element={<CategoryScreen />} />
            <Route path="/courses" element={<AllCoursesScreen />} />
            <Route path="/courses/:url" element={<SingleCourseScreen />} />
            <Route path="*" element={<ErrorScreen />} />
          </Routes>
        </Flex>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
