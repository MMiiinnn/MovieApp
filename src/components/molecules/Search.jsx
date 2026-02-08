import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../atoms/Icon";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const Search = ({ isOpen, onClose, className = "" }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    } else if (!isOpen && inputRef.current) {
      inputRef.current.blur();
    }
  }, [isOpen]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, { capture: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, {
        capture: true,
      });
    };
  }, [isOpen, onClose]);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute right-0 flex items-center! justify-center!
    bg-zinc-900/95 backdrop-blur-md rounded-full transition-all duration-500 ease-in-out overflow-hidden z-20 border border-zinc-700 shadow-xl
        ${isOpen ? "w-[400px] opacity-100 px-3 py-1" : "w-0 opacity-0 border-none px-0"} ${className}`}
    >
      <Button variant="ghost" onClick={handleSearch} className="shrink-0 group p-1! hover:bg-transparent!">
        <Icon 
          name="search" 
          className="text-2xl text-zinc-400 ml-2 group-hover:text-green-500 transition-colors cursor-pointer" 
        />
      </Button>
      
      <Input
        ref={inputRef}
        className="bg-zinc-900/95! border-none outline-none px-3 text-white h-10 font-body placeholder:text-zinc-600 focus:ring-0! focus:border-none!"
        placeholder="Search for movies, TV shows..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      <Button
        variant="ghost"
        onClick={() => {
            setQuery("");
            onClose();
        }}
        className="p-1! hover:text-red-500! transition-colors shrink-0 hover:bg-transparent!"
      >
        <Icon name="close" className="text-2xl" />
      </Button>
    </div>
  );
};

export default Search;
