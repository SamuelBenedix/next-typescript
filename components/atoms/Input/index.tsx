/* eslint-disable react/jsx-props-no-spreading */
interface InputProps {
  label: string;
}

const Input = (props: InputProps) => {
  const { label, ...nativeProps } = props;

  return (
    <>
      <label
        htmlFor="phone"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="tel"
        className="form-control rounded-pill text-lg"
        id="phone"
        name="phone"
        aria-describedby="phone"
        placeholder="Enter your phone number"
        {...nativeProps}
      />
    </>
  );
};

export default Input;
