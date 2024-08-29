function RightBarSection({ children, count, setCount, title }) {
  return (
    <article className="bg-black  border border-[#16181c] mb-4 rounded-2xl  flex flex-col gap-2.5 text-white">
      <h5 className="font-bold  py-2 px-4 text-xl">{title}</h5>
      {children}
      <button
        onClick={() => setCount(count + 3)}
        className="text-left py-2 px-4 text-[#1a89d4] hover:bg-hover rounded-b-xl overflow-hidden"
      >
        Show more
      </button>
    </article>
  );
}

export default RightBarSection;
