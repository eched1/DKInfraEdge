// Button.jsx
export default function Button({ children, variant = "primary", className = "", ...props }) {
    const variants = {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-gray-300 hover:bg-gray-400 text-black",
    };
  
    return (
      <button
        className={`px-4 py-2 rounded ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
