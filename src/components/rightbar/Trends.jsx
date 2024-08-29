import { useState } from "react";
import { formatter } from "../../utils/format";
import trends from "./trends.json";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Icon from "../common/Icon";
import { Link } from "react-router-dom";

function Trends() {
  const [count, setCount] = useState(3);

  const trendsData = (number) => {
    const data = trends.slice(0, number);
    return data;
  };

  return (
    <article className="bg-black  border border-[#16181c] mb-4 rounded-2xl  flex flex-col gap-2.5 text-white">
      <h5 className="font-bold  py-2 px-4">Trends for you</h5>
      {trendsData(count).map((t, i) => (
        <div
          key={i}
          className="flex items-center justify-between hover:bg-hover py-1 px-4"
        >
          <Link to={"#"}>
            <p className="text-[13px] text-[#575b5f] ">{t.title}</p>
            <p className="font-bold">
              {t.topic.type === "tag" && "#"}
              {t.topic.value}
            </p>
            {t.postCount && (
              <span className="text-[13px] text-[#575b5f]">
                {formatter.format(t.postCount)} posts
              </span>
            )}
          </Link>
          <Popover className="relative">
            <PopoverButton className="text-[#575b5f] font-bold hover:rounded-full hover:bg-[#1d9bf01a] size-8 hover:text-cyan-500 transition-colors">
              <span className="block mb-2">...</span>
            </PopoverButton>
            <PopoverPanel
              anchor="right "
              className="flex flex-col bg-black shadow-sm shadow-[#a9a7a7] w-[300px] 
              ml-7 rounded-2xl  font-bold"
            >
              <button className="flex p-3 space-x-2 items-center hover:bg-hover">
                <Icon name="sadSmile" />
                <span>Not interested in this</span>
              </button>
              <button className="flex p-3 space-x-2 items-center hover:bg-hover">
                <Icon name="sadSmile" />
                <span>This trend is harmful or spammy</span>
              </button>
            </PopoverPanel>
          </Popover>
        </div>
      ))}
      <button
        onClick={() => setCount(count + 3)}
        className="text-left py-2 px-4 text-[#1a89d4] hover:bg-hover rounded-b-xl"
      >
        Show more
      </button>
    </article>
  );
}

export default Trends;
