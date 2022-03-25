const monthNames: string[] = [
  "იანვარი",
  "თებერვალი",
  "მარტი",
  "აპრილი",
  "მაისი",
  "ივნისი",
  "ივლისი",
  "აგვისტო",
  "სექტემბერი",
  "ოქტომბერი",
  "ნოემბერი",
  "დეკემბერი",
];

export const getMonthNameAndDayFromDate = (dateText: string) => {
  const date = new Date(dateText);
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  return `${day} ${month}`;
};

export const tenGasColors = [
  "#ef476f",
  "#ffd166",
  "#d6b98f",
  "#06d6a0",
  "#118ab2",
  "#073b4c",
  "#15616d",
  "#ff7d00",
  "#1d5985",
  "#78290f",
];
