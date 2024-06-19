import { Box } from "@chakra-ui/react";
import { Header } from "./Header/Header";
import { HeroSection } from "./HeroSection/HeroSection";
import Stats from "./Stats/Stats";
import { MoreAbout } from "./MoreAbout/MoreAbout";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <>

      <Header/>
      <Box transform={'scale(1)'} h={650}>

      <HeroSection />

      </Box>
      <Stats/>
      <MoreAbout/>
      <WhyChooseUs/>
    
    </>
  );
}

export default App;
