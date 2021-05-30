import { Box } from '@chakra-ui/react'

import { ProjectItem } from 'modules/components/ProjectItem'
import { data } from './data'

export const ProjectsSection = () => (
  <Box as="section" bgColor="black" id="projects">
    {data.map((project) => (
      <ProjectItem key={project.title} item={project} />
    ))}
  </Box>
)
