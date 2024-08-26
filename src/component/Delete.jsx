function Delete({ Text, onClick }) {
    return (
      <button onClick={onClick} className="p-1 w-1/8 bg-stone-400 hover:text-white hover:bg-stone-600 active:bg-stone-200 focus:outline focus:ring focus:ring-stone-300 rounded-lg mx-3 text-sm">
        {Text}
      </button>
    );
  }
  
  export default Delete;