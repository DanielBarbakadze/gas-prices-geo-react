import useFetchData from "../../utils/useFetchData";
import CompanyGraph from "./CompanyGraph";
import { APIResultTypes } from "../../types/api";
import { useState } from "react";
import { Button, Container, Spinner } from "reactstrap";
import Header from "../Header";

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
    <div className="bg-gray-2 min-h-full min-w-[370px]">
      <Header />

      <Container className="flex items-center justify-center min-h-full">
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
          <Spinner animation="border" variant="success" />
        )}
      </Container>
    </div>
  );
};

export default Graphs;
