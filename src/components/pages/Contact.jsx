import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import Input from '../common/Input';
import Button from '../common/Button';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <>
      <Helmet>
        <title>DKInfraEdge LLC | Contact</title>
        <meta name="description" content="Get in touch for a consultation." />
      </Helmet>
      <section className="py-12 max-w-lg mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input label="Name" id="name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-600">Name is required</span>}

          <Input label="Email" id="email" type="email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-600">Email is required</span>}

          <Input label="Message" id="message" {...register("message", { required: true })} />
          {errors.message && <span className="text-red-600">Message is required</span>}

          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </>
  );
}
