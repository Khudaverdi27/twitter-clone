import { useState } from "react";
import Icon from "../common/Icon";
import { useClickAway } from "@uidotdev/usehooks";

function Search() {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
  };
  return (
    <div>
      <div className="min-h-[32px] h-[53px] mb-3 flex items-center">
        <label className="h-[43px] pr-2 relative rounded-full bg-[#202327] w-full border border-transparent focus-within:bg-black focus-within:border-[#1D9BF0] flex items-center">
          <span className="w-[56px] h-full flex items-center justify-center">
            <Icon name="explore" />
          </span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
            type="text"
            className="size-full bg-transparent rounded-full outline-none px-2"
          />
          {value && (
            <button
              onClick={() => setValue("")}
              className="w-7 h-6 rounded-full bg-sky-500  flex items-center justify-center"
            >
              <Icon name="close" />
            </button>
          )}
        </label>
      </div>
      {isOpen && (
        <div ref={ref}>
          <button onClick={() => setIsOpen(false)}>x</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
