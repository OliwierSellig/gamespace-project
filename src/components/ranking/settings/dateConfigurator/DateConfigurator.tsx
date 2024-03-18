"use client";

import { useState } from "react";
import { useRanking } from "../../../../contexts/RankingContext";
import {
  getDayList,
  getMonthNumber,
  getMonthSig,
} from "../../../../utils/functions";
import DateBox from "./dateBox/DateBox";
import DateSetter from "./dateSetter/DateSetter";
import styles from "./dateConfigurator.module.scss";
import { currentDate } from "../../../../utils/data";
import SaveButton from "../saveButton/SaveButton";

function DateConfigurator() {
  const { state, yearList, monthList, isBorderDate } = useRanking();
  const [tempFrom, setTempFrom] = useState<{
    year: number;
    month: number;
    day: number;
  }>(state.dateFrom);
  const [tempTo, setTempTo] = useState<{
    year: number;
    month: number;
    day: number;
  }>(state.dateTo);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <DateSetter heading="Date From:">
          <DateBox
            currentDate={getMonthSig(tempFrom.month)}
            list={monthList}
            onDateChange={(date) =>
              setTempFrom((prev) => {
                return { ...prev, month: getMonthNumber(date) };
              })
            }
            maxDate={() => isBorderDate("max", "month", tempFrom, tempTo)}
          />
          <DateSetter.Separator />
          <DateBox
            currentDate={tempFrom.day.toString()}
            list={getDayList(tempFrom.year, tempFrom.month + 1).map((day) =>
              day.toString()
            )}
            onDateChange={(date) =>
              setTempFrom((prev) => {
                return { ...prev, day: Number(date) };
              })
            }
            maxDate={() => isBorderDate("max", "day", tempFrom, tempTo)}
          />
          <DateSetter.Separator />
          <DateBox
            currentDate={tempFrom.year.toString()}
            list={yearList}
            onDateChange={(date) =>
              setTempFrom((prev) => {
                return { ...prev, year: Number(date) };
              })
            }
            maxDate={() => isBorderDate("max", "year", tempFrom, tempTo)}
          />
        </DateSetter>
        <DateSetter heading="Date To:">
          <DateBox
            currentDate={getMonthSig(tempTo.month)}
            list={monthList}
            onDateChange={(date) =>
              setTempTo((prev) => {
                return { ...prev, month: getMonthNumber(date) };
              })
            }
            maxDate={() =>
              isBorderDate(
                "max",
                "month",
                tempTo,
                {
                  year: currentDate.getFullYear(),
                  month: currentDate.getMonth(),
                  day: currentDate.getDate(),
                },
                0
              )
            }
            minDate={() => isBorderDate("min", "month", tempTo, tempFrom)}
          />
          <DateSetter.Separator />
          <DateBox
            currentDate={tempTo.day.toString()}
            list={getDayList(tempTo.year, tempTo.month + 1).map((day) =>
              day.toString()
            )}
            onDateChange={(date) =>
              setTempTo((prev) => {
                return { ...prev, day: Number(date) };
              })
            }
            maxDate={() =>
              isBorderDate(
                "max",
                "day",
                tempTo,
                {
                  year: currentDate.getFullYear(),
                  month: currentDate.getMonth(),
                  day: currentDate.getDate(),
                },
                0
              )
            }
            minDate={() => isBorderDate("min", "day", tempTo, tempFrom)}
          />
          <DateSetter.Separator />
          <DateBox
            currentDate={tempTo.year.toString()}
            list={yearList}
            onDateChange={(date) =>
              setTempTo((prev) => {
                return { ...prev, year: Number(date) };
              })
            }
            maxDate={() =>
              isBorderDate(
                "max",
                "year",
                tempTo,
                {
                  year: currentDate.getFullYear(),
                  month: currentDate.getMonth(),
                  day: currentDate.getDate(),
                },
                0
              )
            }
            minDate={() => isBorderDate("min", "year", tempTo, tempFrom)}
          />
        </DateSetter>
      </div>
      <SaveButton tempFrom={tempFrom} tempTo={tempTo} />
    </div>
  );
}

export default DateConfigurator;
