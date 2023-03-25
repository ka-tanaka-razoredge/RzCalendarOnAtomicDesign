import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputWrapperProps {
  name: string;
  value: string;
  setValue: (v: string) => void;
  openPicker: () => void;
  closePicker: () => void;
  isShowing: boolean;
  setIsShowing?: (v: boolean) => void;
}

export default (props: InputWrapperProps) => {
  const { register } = useFormContext();

  const isReadOnly = () => {
    if (!props.setIsShowing) {
      return false;
    } else {
      return props.isShowing;
    }
  };

  return (
    <div
      onClick={(e) => {
        if (!props.isShowing) {
          props.openPicker();
          props.setIsShowing(true);
        } else {
          props.closePicker();
          props.setIsShowing(false);
        }
      }}
      style={{ position: 'absolute', zIndex: 1000 }}
    >
      <input
        type="text"
        readOnly={isReadOnly()}
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
