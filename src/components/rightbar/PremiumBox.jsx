import Button from "../common/Button";

function PremiumBox() {
  return (
    <div className="bg-[#16181c] mb-4 rounded-2xl py-3 px-4 flex flex-col gap-2.5 text-white">
      <h6 className="text-xl leading-6 font-bold">Subscribe to Premium</h6>
      <p className="leading-5 ">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <div className="self-start">
        <Button size="normal">Subscribe</Button>
      </div>
    </div>
  );
}

export default PremiumBox;
