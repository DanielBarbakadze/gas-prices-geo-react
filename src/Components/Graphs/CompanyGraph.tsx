import { useState } from "react";
import { Input, Button, Label, InputGroup } from "reactstrap";

import styles from "./Graphs.module.scss";
import { APIResultTypes } from "../../types/api";
import { getMonthNameAndDayFromDate, tenGasColors } from "../../utils/graph";

import Graph from "./Graph";
import { Link } from "react-router-dom";

type GasolineType = "fuel" | "gas";

type CompanyGraphProps = {
  companyData: APIResultTypes;
  children?: React.ReactNode;
};

const CompanyGraph = ({ companyData, children }: CompanyGraphProps) => {
  const [period, setPeriod] = useState(7);
  const [type, setType] = useState<GasolineType>("fuel");

  let filteredPricesData = (
    type === "fuel" ? companyData.fuel.pricesData : companyData.gas.pricesData
  ).map((item) => item.slice(0, period));

  let labels = companyData.dateLabels
    .slice(0, period)
    .map((date) => getMonthNameAndDayFromDate(date));

  const data = {
    labels,
    datasets: filteredPricesData.map((item: string[], idx: number) => ({
      label:
        type === "fuel"
          ? companyData.fuel.titles[idx]
          : companyData.gas.titles[idx],
      data: item.map((price: string) => parseFloat(price)),
      backgroundColor: tenGasColors[idx],
      borderColor: tenGasColors[idx],
      cubicInterpolationMode: "monotone",
      pointStyle: "circle",
      pointRadius: 7,
      pointHoverRadius: 12,
    })),
  };

  const getColor = (passed: number) =>
    passed === period ? "primary" : "secondary";

  const getTypeColor = (passed: GasolineType) =>
    passed === type ? "primary" : "secondary";

  return (
    <div className={styles.graphComponentWrapper}>
      {children}
      <div className={styles.typesSwitchWrapper}>
        <Button color={getTypeColor("fuel")} onClick={() => setType("fuel")}>
          ბენზინის ფასები
        </Button>
        <Button color={getTypeColor("gas")} onClick={() => setType("gas")}>
          გაზის ფასები
        </Button>
      </div>
      <div className={styles.graph}>
        <Graph tableTitle={companyData.tableTitle} data={data} />
      </div>
      <div className={styles.content}>
        <div className={styles.buttonsWrapper}>
          <Button color={getColor(3)} onClick={() => setPeriod(3)}>
            ბოლო 3 დღე
          </Button>
          <Button color={getColor(7)} onClick={() => setPeriod(7)}>
            ბოლო 1 კვირა
          </Button>
          <Button color={getColor(14)} onClick={() => setPeriod(14)}>
            ბოლო 2 კვირა
          </Button>
          <Button color={getColor(21)} onClick={() => setPeriod(21)}>
            ბოლო 3 კვირა
          </Button>
          <Button color={getColor(31)} onClick={() => setPeriod(31)}>
            ბოლო 1 თვე
          </Button>
        </div>

        <InputGroup className={styles.inputGroup}>
          <Label>ბოლო {period} დღე</Label>
          <Input
            name="daysRange"
            type="range"
            min={2}
            max={31}
            value={period}
            onChange={(e) => setPeriod(parseInt(e.target.value))}
            step={1}
          ></Input>
        </InputGroup>
      </div>

      <Link to="/">საწვავის ფასები</Link>
    </div>
  );
};

export default CompanyGraph;
