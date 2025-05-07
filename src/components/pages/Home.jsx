import { Helmet } from 'react-helmet';
import Button from '../common/Button';
import hero from '../../assets/images/hero.jpg';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>DKInfraEdge LLC | Home</title>
        <meta name="description" content="Empowering IT infrastructure." />
      </Helmet>
      <section className="text-center py-12">
        <img src={hero} className="mx-auto rounded-lg shadow-lg w-full max-w-3xl" alt="IT Infrastructure" />
        <h1 className="text-4xl font-bold mt-8">Empowering the Future of IT Infrastructure</h1>
        <p className="my-4 text-lg text-gray-600">Scalable. Secure. Smart Solutions for Modern Businesses.</p>
        <Button>Get a Free Quote</Button>
      </section>
    </>
  );
}
