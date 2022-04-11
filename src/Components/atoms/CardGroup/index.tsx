import { SavedPricesValue } from "../../../types/api";

type CardGroupProps = {
  item: SavedPricesValue;
};

const CardGroup = ({ item }: CardGroupProps) => {
  // console.log(item);
  return (
    <div key={item.company} className="">
      <h2>{item.company}</h2>
      <ul>
        {Array.from(item.pricesList).map((prices, idx) => (
          <li key={idx} className="">
            <div className="">{prices.title}</div>
            <div className="">{prices.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardGroup;
