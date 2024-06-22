import { Box } from "@chakra-ui/react";
import { Header } from "./Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import Stats from "./Stats/Stats";
import { MoreAbout } from "./MoreAbout/MoreAbout";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Categories from "./Categories/Categories";
import Coaches from "./Choaches/Choaches";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Box >

          <Header/>
          <Box h={650}>

          <HeroSection />

          </Box>
          <Stats/>
          <Box >

            <MoreAbout />

          </Box>
          <WhyChooseUs/>
          <Coaches/>
          <Categories/>
        
          <Footer/>
      </Box>
    
    </>
  );
}

export default App;
