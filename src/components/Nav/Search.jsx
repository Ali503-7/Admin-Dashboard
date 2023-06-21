import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div>
      <div className="text-xl text-Light-Text-Primary cursor-pointer p-2 rounded-full hover:bg-Light-Action-Hover dark:text-Dark-Text-Primary dark:hover:bg-Dark-Action-Hover">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default Search;
