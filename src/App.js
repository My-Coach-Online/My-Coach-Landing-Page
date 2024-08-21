import { Box } from "@chakra-ui/react";
import { Header } from "./FrontEnd/Header/Header";
import { HeroSection } from "./FrontEnd/HeroSection/HeroSection";
import Stats from "./FrontEnd/Stats/Stats";
import { MoreAbout } from "./FrontEnd/MoreAbout/MoreAbout";
import WhyChooseUs from "./FrontEnd/WhyChooseUs/WhyChooseUs";
import Categories from "./FrontEnd/Categories/Categories";
import Coaches from "./FrontEnd/Choaches/Choaches";
import Footer from "./FrontEnd/Footer/Footer";
import ContactUs from "./FrontEnd/ContactUs/ContactUs";
import { HowItWorks } from "./FrontEnd/How it works/HowItWorks";

function App() {
  return (
    <>
      <Box >

          <Header/>
          <HeroSection />
          {/* <Stats/> */}
          <MoreAbout />
          <WhyChooseUs/>
          <HowItWorks/>
          <Box bg={'white'}>
            <Coaches/>
          </Box>
          {/* <Categories/> */}
          <ContactUs/>
        
          <Footer/>
      </Box>
    
    </>
  );
}

export default App;
