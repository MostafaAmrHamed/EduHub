import Answer from "./Answer";

const Question = () => {
  return (
    <div className="bg-primary-2 p-5">
      <div className="flex items-between-between px-2">
        <h1>Q[ ]</h1>
        <p>X</p>
      </div>
      <form className="w-[800px]">
        <label>
          <input
            type="text"
            className="w-[800px] h-[60px] p-5 border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 rounded-sm"
            placeholder="Question title?"
          />
        </label>
        <div className="flex flex-col gap-2 mt-5">
          <Answer />
          <Answer />
          <Answer />
        </div>
      </form>
    </div>
  );
};

export default Question;
