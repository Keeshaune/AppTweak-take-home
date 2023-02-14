import React, { FC, useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import { DateRange } from "../../../models/Date";

type DateRangePickerProps = {
  onChange: (dateRange: DateRange) => void;
  defaultStartDate: Dayjs;
  defaultEndDate: Dayjs;
};

const DateRangePicker: FC<DateRangePickerProps> = (props) => {
  const { onChange, defaultEndDate, defaultStartDate } = props;

  const [startDate, setStartDate] = useState<string>(defaultStartDate.format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState<string>(defaultEndDate.format("YYYY-MM-DD"));

  useEffect(() => {
    onChange({ startDate, endDate });
  }, [startDate, endDate]);

  return (
    <>
      <label className="px-1" htmlFor="startDate">Start date:</label>
      <input
        className="px-1"
        name="startDate"
        type="date"
        defaultValue={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label className="px-1" htmlFor="endDate">End date:</label>
      <input
        className="px-1"
        name="endDate"
        type="date"
        defaultValue={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </>
  );
};

export default DateRangePicker;
