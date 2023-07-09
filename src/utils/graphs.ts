/* eslint-disable no-nested-ternary */
export const windFundData = [
  { value: 2, label: '', labelComponent: () => {} },
  { value: 20, label: '', labelComponent: () => {} },
  { value: 18, label: '', labelComponent: () => {} },
  { value: 40, label: '', labelComponent: () => {} },
  { value: 36, label: '', labelComponent: () => {} },
  { value: 60, label: '', labelComponent: () => {} },
  { value: 54, label: '', labelComponent: () => {} },
  { value: 85, label: '', labelComponent: () => {} },
  { value: 93, label: '', labelComponent: () => {} },
  { value: 54, label: '', labelComponent: () => {} },
];

const windFundMax = Math.max(...windFundData.map(item => item.value));
const windFundMin = Math.min(...windFundData.map(item => item.value));

export const windFundDetailedData = windFundData.map(item => ({
  ...item,
  hideDataPoint: item.value !== windFundMax && item.value !== windFundMin,
  dataPointText:
    item.value === windFundMax
      ? `$${windFundMax}`
      : item.value === windFundMin
      ? `$${windFundMin}`
      : '',
}));

export const solarFundData = [
  { value: 20, label: '', labelComponent: () => {} },
  { value: 12, label: '', labelComponent: () => {} },
  { value: 7, label: '', labelComponent: () => {} },
  { value: 30, label: '', labelComponent: () => {} },
  { value: 40, label: '', labelComponent: () => {} },
  { value: 20, label: '', labelComponent: () => {} },
  { value: 25, label: '', labelComponent: () => {} },
  { value: 23, label: '', labelComponent: () => {} },
  { value: 21, label: '', labelComponent: () => {} },
  { value: 10, label: '', labelComponent: () => {} },
];

const solarFundMax = Math.max(...solarFundData.map(item => item.value));
const solarFundMin = Math.min(...solarFundData.map(item => item.value));

export const solarFundDetailedData = solarFundData.map(item => ({
  ...item,
  hideDataPoint: item.value !== solarFundMax && item.value !== solarFundMin,
}));

export const plantFundData = [
  { value: 30, label: '', labelComponent: () => {} },
  { value: 78, label: '', labelComponent: () => {} },
  { value: 90, label: '', labelComponent: () => {} },
  { value: 80, label: '', labelComponent: () => {} },
  { value: 93, label: '', labelComponent: () => {} },
  { value: 97, label: '', labelComponent: () => {} },
  { value: 102, label: '', labelComponent: () => {} },
  { value: 110, label: '', labelComponent: () => {} },
  { value: 102, label: '', labelComponent: () => {} },
  { value: 104, label: '', labelComponent: () => {} },
];

const plantFundMax = Math.max(...plantFundData.map(item => item.value));
const plantFundMin = Math.min(...plantFundData.map(item => item.value));

export const plantFundDetailedData = plantFundData.map(item => ({
  ...item,
  hideDataPoint: item.value !== plantFundMax && item.value !== plantFundMin,
}));
