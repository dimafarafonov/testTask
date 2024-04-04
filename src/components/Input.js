const Input = (props) => {
  const { register, fieldname } = props;

  return <input {...props} {...register(fieldname)} />;
};

export default Input;
