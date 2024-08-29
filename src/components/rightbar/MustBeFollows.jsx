import { useState } from "react";
import RightBarSection from "./RightBarSection";
import follows from "./follows.json";
import { Link } from "react-router-dom";
import Icon from "../common/Icon";
import Button from "../common/Button";

function MustBeFollows() {
  const [count, setCount] = useState(3);
  const [followStates, setFollowStates] = useState({});

  const followsData = (number) => {
    return follows.slice(0, number);
  };

  const handleFollowClick = (id) => {
    setFollowStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <RightBarSection count={count} title={"Who to follow"} setCount={setCount}>
      {followsData(count).map((f) => (
        <Link
          key={f.id}
          to={"#"}
          className="flex items-center justify-between hover:bg-hover py-0.5 px-4"
        >
          <div className="flex items-center space-x-2">
            <img className="size-10 rounded-full" src={f.img} alt="" />

            <div>
              <p className="font-bold flex items-center space-x-1">
                <span>{f.name}</span>
                <span className="mt-1">
                  {f.isPremium && <Icon name="premiumVerify" />}
                  {f.isOfficial && <Icon name="officialVerify" />}
                </span>
              </p>
              <span className="text-[15px] text-[#575b5f]">{f.username}</span>
            </div>
          </div>
          <Button
            size="small"
            variant="white"
            onClick={() => handleFollowClick(f.id)}
          >
            {followStates[f.id] ? "Following" : "Follow"}
          </Button>
        </Link>
      ))}
    </RightBarSection>
  );
}

export default MustBeFollows;
