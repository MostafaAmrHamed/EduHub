const ClassItem = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center bg-primary-2 hover:bg-primary-3 p-2">
      <p>Sana Awla</p>
      <div className="flex gap-4">
        <button className="w-[80px] py-1 text-primary-2 bg-primary-1 hover:shadow-lg transition-shadow rounded">
          Edit
        </button>
        <button className="w-[80px] py-1 text-primary-2 bg-primary-4 hover:shadow-lg transition-shadow rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ClassItem;
