import { Link, Route, Routes } from 'react-router-dom';
import { HStack, Link as CLink } from '@chakra-ui/react';
import loadable from '@loadable/component';

const Index = loadable(() => import('./pages'), {
  resolveComponent: (components) => components.Index,
});
const About = loadable(() => import('./pages/about'));

export function App() {
  return (
    <>
      <HStack spacing={8}>
        <CLink as={Link} to={'/'}>
          Home
        </CLink>
        <CLink as={Link} to={{ pathname: 'about' }}>
          About
        </CLink>
      </HStack>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
