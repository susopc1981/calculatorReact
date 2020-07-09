export function changeSimbol(value, params) {
  const result = Number(value) * -1;
  if (params.length > 0) params.splice(0, 1, result);
  return result.toString();
}
