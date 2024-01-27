"use client";

import { useState } from "react";
import { useRanking } from "../../contexts/RankingContext";
import DateSetter from "./DateSetter";
import RankingOrder from "./RankingOrder";
import styles from "./configurator.module.scss";
import DateBox from "./DateBox";
import { getDayList, getMonthSig, getMonthNumber } from "../../utils/functions";
import { currentDate } from "../../utils/data";
import SaveButton from "./SaveButton";

type ConfiguratorProps = { order: string };

function Configurator({ order }: ConfiguratorProps) {
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
    <nav className={styles.container}>
      <div className={styles.box}>
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
      <RankingOrder order={order} />
    </nav>
  );
}

export default Configurator;
