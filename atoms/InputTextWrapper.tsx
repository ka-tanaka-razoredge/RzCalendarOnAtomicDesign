import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputWrapperProps {
  name: string;
  value: string;
  setValue: (v: string) => void;
  openPicker: () => void;
  closePicker: () => void;
}

export default (props: InputWrapperProps) => {
  const { register } = useFormContext();
  const [isShowing, setIsShowing] = React.useState(false);

  return (
    <div
      onClick={(e) => {
        if (!isShowing) {
          props.openPicker();
          setIsShowing(true);
        } else {
          props.closePicker();
          setIsShowing(false);
        }
      }}
    >
      <input
        type="text"
        readOnly={isShowing}
        {...register(props.name)}
        value={props.value}
        onChange={(e) => {
          console.log(e.target.value);
          props.setValue(e.target.value);
        }}
      />
    </div>
  );
};
