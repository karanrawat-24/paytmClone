const InputBox = ({ label, placeholder, onChange }) => {
  return (
    <div className='text-sm font-medium text-left py-2'>
      <label>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        className='w-full px-2 border rounded border-slate-300'
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
