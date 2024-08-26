function Button({ Text, onClick }) {
    return (
      <button onClick={onClick} className="p-1 w-24 bg-stone-400 hover:text-white hover:bg-stone-600 active:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-300 rounded-full mx-3">
        {Text}
      </button>
    );
  }
  
  export default Button;