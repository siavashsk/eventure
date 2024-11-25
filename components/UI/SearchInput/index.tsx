import React, { useState } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  inputClassName?: string;
  buttonClassName?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  onSearch = () => {},
  inputClassName = "",
  buttonClassName = "",
}) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="w-full min-w-[200px] max-w-sm">
      <div className="relative">
        <input
          className={`ease w-full rounded-md bg-stroke py-3 pl-3 pr-28 text-sm text-black shadow-sm transition duration-300 placeholder:text-zinc-500 focus:border-slate-400 focus:shadow focus:outline-none dark:bg-blacksection dark:text-white dark:placeholder:text-zinc-400 ${inputClassName}`}
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
        />
        <button
          className={`absolute right-1 top-1 flex items-center rounded border border-transparent bg-primary px-2 py-2 text-center text-sm text-white shadow-sm transition-all hover:bg-primaryho hover:shadow  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${buttonClassName}`}
          type="button"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
