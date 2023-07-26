import { AiOutlineSearch } from "react-icons/ai";

const EmailSearch = ({ emails, setEmails }) => {
  return (
    <div className="w-full py-4 px-5 flex flex-row items-center gap-3 text-Light-Text-Disabled dark:text-Dark-Text-Primary border-b-[1px] dark:border-b-Dark-Other-Divider border-b-Light-Other-Divider">
      <AiOutlineSearch />
      <input
        type="search"
        placeholder="Search mail"
        className="w-full text-Light-Text-Primary dark:text-Dark-Text-Primary bg-transparent outline-none placeholder-Light-Text-Disabled dark:placeholder-Dark-Text-Primary Body1"
      />
    </div>
  );
};

export default EmailSearch;
