const SearchBox = ({ onChange }) => {
  return (
    <div>
      <div className='my-2'>
        <input
          type='text'
          className='border border-slate-200 w-full px-2 py-1 rounded '
          placeholder='Search User'
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
