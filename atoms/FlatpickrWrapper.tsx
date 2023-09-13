import * as React from 'react';
import 'flatpickr/dist/flatpickr.min.css';
import Flatpickr from 'react-flatpickr';
import { Japanese } from 'flatpickr/dist/l10n/ja.js';

import { useFormContext } from 'react-hook-form';
import flatpickr from 'flatpickr';
flatpickr.localize(Japanese);

import useDate from '../utilities/useDate';

interface RzCalendarProps {
  name: string;
}

export default React.forwardRef(
  (
    props: {
      setValue: (v: string) => void;
      setIsShowing: (v: boolean) => void;
    },
    ref: React.Ref<Flatpickr>
  ) => {
    const { formatDate } = useDate();
    return (
      <Flatpickr
        ref={ref}
        options={{
          allowInput: true,
        }}
        onClose={(e) => {
          props.setIsShowing(false);
        }}
        onChange={(e) => {
          console.log(e);
          props.setValue(formatDate(e[0] as Date, 'yyyy/MM/dd'));
        }}
      />
    );
  }
);
