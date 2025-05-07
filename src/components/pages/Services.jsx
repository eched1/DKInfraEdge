import { Helmet } from 'react-helmet';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>DKInfraEdge LLC | Services</title>
        <meta name="description" content="Structured Cabling, Network Security, Cloud Integration, IT Support." />
      </Helmet>
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <ul className="max-w-4xl mx-auto text-lg space-y-4">
          <li>✅ <strong>Structured Cabling:</strong> High-performance cabling solutions.</li>
          <li>✅ <strong>Network Security:</strong> Customized firewall and VPN deployments.</li>
          <li>✅ <strong>Cloud Integration:</strong> AWS, Azure, Google Cloud expertise.</li>
          <li>✅ <strong>IT Support:</strong> Proactive 24/7 remote monitoring.</li>
        </ul>
      </section>
    </>
  );
}
