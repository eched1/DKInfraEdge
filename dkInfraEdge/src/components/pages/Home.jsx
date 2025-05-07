// Home.jsx
import { Helmet } from "react-helmet";

const Home = () => (
  <>
    <Helmet>
      <title>DKInfraEdge | Home</title>
      <meta name="description" content="Welcome to DKInfraEdge - Your IT Infrastructure partner." />
    </Helmet>
    <section className="container mx-auto my-8">
      <h1 className="text-3xl font-bold">Welcome to DKInfraEdge</h1>
      <p>Your trusted IT Infrastructure partner, providing scalable, secure, and smart solutions.</p>
    </section>
  </>
);

export default Home;
