import { useState } from "react";
import { Button, Container, Spinner } from "reactstrap";

import Header from "../../molecules/Header";
import MobileFooter from "../../molecules/MobileFooter";

import useFetchData from "../../../utils/useFetchData";
import { APIResultTypes } from "../../../types/api";

import CompanyGraph from "./CompanyGraph";

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
              {companies.map((company) => (
                <Button
                  key={company}
                  color={
                    currentCompany === SelectedCompany[company]
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() => setCurrentCompany(SelectedCompany[company])}
                  className="m-16"
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

      <MobileFooter />
    </div>
  );
};

export default Graphs;
