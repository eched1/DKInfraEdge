import { Helmet } from 'react-helmet';
import AnimatedSection from '../common/AnimatedSection';

const Home = () => (
  <>
    <Helmet>
      <title>Home | DKInfraEdge</title>
      <meta name="description" content="Home page of DKInfraEdge" />
    </Helmet>
    <AnimatedSection className="my-12 px-4">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to DKInfraEdge</h1>
      <p className="text-lg text-gray-700">
        Your trusted IT Infrastructure partner, providing scalable, secure, and smart solutions.
      </p>
    </AnimatedSection>
  </>
);

export default Home;
