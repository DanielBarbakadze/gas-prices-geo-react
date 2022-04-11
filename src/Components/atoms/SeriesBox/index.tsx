import Box from "../Box";
import DoughnutChart from "../../organisms/Graphs/DoughnutChart";

type SeriesBoxProps = {
  seriesInfo: any;
  title: string;
};

const SeriesBox = ({ seriesInfo, title }: SeriesBoxProps) => {
  return (
    <Box className="shadow-200">
      <div className="text-green-1">
        <p className="text-16 text-center pb-2 font-600">{title}</p>

        <div className="flex justify-around align-items-center">
          <div className="relative max-w-[125px]">
            <DoughnutChart
              labels={seriesInfo.labels}
              prices={seriesInfo.priceData}
            />
            <div className="absolute top-50 left-[50%] translate-x-[-50%] translate-y-[-44%]">
              <div className="text-center text-[10px]">
                <div className="">{seriesInfo.cheapest.company}</div>
                <div className="font-600 text-18">
                  {`${parseFloat(seriesInfo.cheapest.pricesList.price)} ₾`}
                </div>
              </div>
            </div>
          </div>

          <div>
            <ul className="m-0 pl-8">
              {seriesInfo.data.map((item: any) => (
                <li
                  className="flex justify-between items-center"
                  key={item.company}
                >
                  <span className="text-14">{item.company}: </span>
                  <span className="block pl-[8px]">
                    {item.pricesList.price.slice(0, 4)} ₾
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SeriesBox;
