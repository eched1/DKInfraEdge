export default function Input({ label, id, ...props }) {
    return (
      <div className="flex flex-col my-2">
        {label && <label htmlFor={id} className="mb-1 font-medium">{label}</label>}
        <input
          id={id}
          className="border rounded px-3 py-2"
          {...props}
        />
      </div>
    );
  }
  