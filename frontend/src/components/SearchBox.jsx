const SearchBox = () => {
  return (
    <div>
      <div className='my-2'>
        <input
          type='text'
          className='border border-slate-200 w-full px-2 py-1 rounded '
          placeholder='Search User'
        />
      </div>
    </div>
  );
};

export default SearchBox;
