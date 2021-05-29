import { Box } from '@chakra-ui/react'

import { HeroSection } from 'modules/sections/Hero'
import { ProjectsSection } from 'modules/sections/Projects'
import { AboutMeSection } from 'modules/sections/AboutMe'
import { FooterSection } from 'modules/sections/Footer'

const HomePage = () => (
  <Box>
    <HeroSection />
    <ProjectsSection />
    <AboutMeSection />
    <FooterSection />
  </Box>
)

export default HomePage
