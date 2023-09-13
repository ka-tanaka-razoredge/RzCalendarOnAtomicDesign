import * as React from 'react';
import InputTextWrapper from './atoms/InputTextWrapper';
import FlatpickrWrapper from './atoms/FlatpickrWrapper';
import useDate from './utilities/useDate';
import Flatpickr from 'react-flatpickr';

interface RzCalendarProps {
  name: string;
}

export default React.forwardRef((props: RzCalendarProps, ref) => {
  const picker = React.useRef<Flatpickr>(null);
  const [value, setValue] = React.useState(useDate().inquire2Decades());
  const [isShowing, setIsShowing] = React.useState(false);

  const toDateString = (source, delimiter) => {
    const memento = source.split(delimiter);
    const year = memento[0];
    const month = ('00' + memento[1]).slice(-2);
    const day = ('00' + memento[2]).slice(-2);
    return `${year}-${month}-${day}T00:00:00.000Z`;
  };

  React.useEffect(() => {
    picker.current.flatpickr.setDate(new Date(value));
  }, [value]);

  const openPicker = () => {
    picker.current.flatpickr.open();
  };

  const closePicker = () => {
    picker.current.flatpickr.close();
  };

  return (
    <div>
      <InputTextWrapper
        name="birthdate"
        value={value}
        openPicker={openPicker}
        closePicker={closePicker}
        setValue={setValue}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
      />
      <FlatpickrWrapper
        ref={picker}
        setIsShowing={setIsShowing}
        setValue={setValue}
      />
    </div>
  );
});
