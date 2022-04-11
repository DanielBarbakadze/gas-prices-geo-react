import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";

import Header from "./Header";
import Box from "./atoms/Box";
import SeriesBox from "./atoms/SeriesBox";
import MobileFooter from "./organisms/MobileFooter";
import HorizontalBarChart from "./organisms/Graphs/HorizontalBarChart";

import { SavedPricesTypes } from "../types/api";
import useFetchPrices from "../utils/useFetchPrices";
import { useLocalStorage } from "../utils/useLocalStorage";

const Home = () => {
  const [fetchNow, setFetchNow] = useState();

  const { prices } = useFetchPrices(fetchNow);

  const [savedPrices, setSavedPrices] = useLocalStorage("prices");

  useEffect(() => {
    if (savedPrices === undefined && prices === undefined) {
      setFetchNow(true as any);
    }
    if (savedPrices === undefined && prices !== undefined) {
      let filteredPrices = (prices as any).map((item: any) => ({
        ...item,
        pricesList: item.pricesList.filter(
          (series: any) => !series.price.includes("0.00")
        ),
      }));
      setSavedPrices(filteredPrices, 1000 * 60 * 60 * 3);
    }
  }, [prices]); // eslint-disable-line react-hooks/exhaustive-deps

  const getSeriesInfo = (prices: any, seriesIndex: number) => {
    if (prices) {
      const dataPrices = prices.value.map((item: any) => ({
        ...item,
        pricesList: item.pricesList[seriesIndex],
      }));

      dataPrices.sort((prev: any, current: any) => {
        return (
          parseFloat(prev.pricesList.price) -
          parseFloat(current.pricesList.price)
        );
      });

      const labels = dataPrices.map((item: any) => item.company);

      const priceData = dataPrices.map((item: any) =>
        parseFloat(item.pricesList.price)
      );

      const cheapest = dataPrices.reduce(
        (prev: any, current: any) =>
          parseFloat(current.pricesList.price) <
          parseFloat(prev.pricesList.price)
            ? current
            : prev,
        dataPrices[0]
      );

      return {
        data: dataPrices,
        labels,
        priceData,
        cheapest,
      };
    }
  };

  const superInfo = getSeriesInfo(savedPrices, 0);
  const premiumInfo = getSeriesInfo(savedPrices, 1);
  const regularInfo = getSeriesInfo(savedPrices, 2);

  return (
    <div className="bg-gray-2 min-h-full min-w-[370px]">
      <Header />

      {savedPrices ? (
        <Container>
          <h2 className="pb-16 text-[20px] md text-[20px] md:text-24 text-center text-gray-8">
            ყველაზე იაფი საწვავი დღეს
          </h2>

          <Row>
            <Col xs="12" md="6" xl="4">
              <div className="pb-16 max-w-[400px] m-auto md:max-w-auto">
                <SeriesBox
                  title={"ყველაზე იაფი სუპერი დღეს"}
                  seriesInfo={superInfo}
                />
              </div>
            </Col>
            <Col xs="12" md="6" xl="4">
              <div className="pb-16 max-w-[400px] m-auto md:max-w-auto">
                <SeriesBox
                  title={"ყველაზე იაფი პრემიუმი დღეს"}
                  seriesInfo={premiumInfo}
                />
              </div>
            </Col>
            <Col xs="12" md="6" xl="4">
              <div className="pb-16 max-w-[400px] m-auto md:max-w-auto">
                <SeriesBox
                  title={"ყველაზე იაფი რეგულარი დღეს"}
                  seriesInfo={regularInfo}
                />
              </div>
            </Col>
          </Row>

          <h2 className="py-16 text-[20px] md:text-24 text-center text-gray-8">
            კომპანიები
          </h2>

          <Row>
            {(savedPrices as SavedPricesTypes).value.map((item) => (
              <Col xs="12" md="6" lg="4" key={item.company} className="pb-32">
                <div className="max-w-[400px] m-auto">
                  <Box className="shadow-200">
                    <h4 className="text-16 text-center pb-2 font-600">
                      {item.company}
                    </h4>

                    <HorizontalBarChart
                      title={item.company}
                      labels={item.pricesList.map((series) => series.title)}
                      data={item.pricesList.map((series) =>
                        parseFloat(series.price)
                      )}
                    />
                  </Box>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Container className="flex items-center justify-center h-full">
          <Spinner animation="border" variant="success" />
        </Container>
      )}

      <MobileFooter />
    </div>
  );
};

export default Home;
