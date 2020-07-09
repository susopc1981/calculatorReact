export function saveCurrentToHistoric(data, setHistoricOp, historicOp) {
  console.log(historicOp.length);
  if (historicOp.length === 5) {
    const result = historicOp.filter((value, index) => index !== 0);
    return setHistoricOp([...result, data]);
  }
  setHistoricOp([...historicOp, data]);
}
