import useFetchData from "../../utils/useFetchData";
import CompanyGraph from "./CompanyGraph";
import { APIResultTypes } from "../../types/api";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";

enum SelectedCompany {
  "Socar" = "სოკარი",
  "Wissol" = "Wissol",
  "Lukoil" = "ლუკოილი",
}

const Graphs = () => {
  const initialCompany = SelectedCompany.Socar;

  const companies: Array<keyof typeof SelectedCompany> = [
    "Socar",
    "Wissol",
    "Lukoil",
  ];

  const [currentCompany, setCurrentCompany] =
    useState<SelectedCompany>(initialCompany);

  const data = useFetchData(currentCompany || initialCompany);

  return (
    <div>
      {data?.fetchData ? (
        <CompanyGraph
          companyData={data?.fetchData as unknown as APIResultTypes}
        >
          <div>
            {companies.map((company, idx) => (
              <Button
                key={company}
                color={
                  currentCompany === SelectedCompany[company]
                    ? "primary"
                    : "secondary"
                }
                onClick={() => setCurrentCompany(SelectedCompany[company])}
                style={{ margin: "15px" }}
              >
                {company}
              </Button>
            ))}
          </div>
        </CompanyGraph>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Graphs;
