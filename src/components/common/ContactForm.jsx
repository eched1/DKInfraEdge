import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input
        {...register('fullName', { required: 'Full name is required.' })}
        placeholder="Full Name"
        autoComplete="name"
        className="border p-2 w-full"
      />
      {errors.fullName && <span>{errors.fullName.message}</span>}

      <input
        {...register('email', {
          required: 'Email is required.',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Please enter a valid email.',
          },
        })}
        placeholder="Email Address"
        autoComplete="email"
        className="border p-2 w-full mt-4"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea
        {...register('message', { required: 'Message is required.' })}
        placeholder="Message"
        autoComplete="off"
        className="border p-2 w-full mt-4"
      />
      {errors.message && <span>{errors.message.message}</span>}

      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
