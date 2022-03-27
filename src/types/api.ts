export interface APIResultTypes {
  tableTitle: string;
  dateLabels: string[];
  fuel: Fuel;
  gas: Fuel;
}

interface Fuel {
  titles: string[];
  pricesData: Array<string[]>;
}

export interface SavedPricesTypes {
  value: SavedPricesValue[];
  expiry: number;
}

export interface SavedPricesValue {
  company: string;
  pricesList: SavedPricesValueList[];
}

interface SavedPricesValueList {
  title: string;
  price: string;
}
