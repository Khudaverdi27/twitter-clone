import { useEffect, useState } from "react";
import Icon from "../common/Icon";
import { useClickAway } from "@uidotdev/usehooks";

function Search() {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpen = () => {
    setValue("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (value) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [value]);
  return (
    <div className="sticky top-0 bg-black z-10 ">
      <div className="min-h-[32px] h-[53px] mb-3 flex items-center">
        <label className="h-[43px] pr-2 relative rounded-full bg-[#202327] w-full border border-transparent focus-within:bg-black focus-within:border-[#1D9BF0] flex items-center">
          <span className="w-[56px] h-full flex items-center justify-center">
            <Icon name="explore" />
          </span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder="Search"
            type="text"
            className="size-full bg-transparent rounded-full outline-none px-2"
          />
          {value && (
            <button
              onClick={handleOpen}
              className="w-7 h-6 rounded-full bg-sky-500  flex items-center justify-center"
            >
              <Icon name="close" />
            </button>
          )}
        </label>
      </div>
      {isOpen && value && (
        <div
          className="bg-black absolute top-12 shadow-md shadow-slate-900 p-3 rounded-xl"
          ref={ref}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi !
          </p>
          <br />
          <p>
            eos, enim maxime natus quo molestias dolores quisquam laboriosam eum
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
