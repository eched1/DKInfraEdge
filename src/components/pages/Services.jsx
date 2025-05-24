import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useFetch from '../../hooks/useFetch';
import ServiceCard from '../common/ServiceCard';
import LoadingSpinner from '../common/LoadingSpinner';

export default function Services() {
  const { data, loading, error } = useFetch('/services.json');
  const [query, setQuery] = useState('');

  const filtered = data?.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <Helmet>
        <title>Services | DKInfraEdge</title>
        <meta
          name="description"
          content="Structured Cabling, Network Security, Cloud Integration, IT Support."
        />
      </Helmet>
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full max-w-md mx-auto mb-6"
        />
        {loading && <LoadingSpinner />}
        {error && <p className="text-red-500 text-center">Failed to load services.</p>}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered?.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}
