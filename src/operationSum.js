export function operationSum(par1, par2, oper) {
  //   return par1 + par2;
  switch (oper) {
    case "+":
      return par1 + par2;
    case "-":
      return par1 - par2;
    case "/":
      return par1 / par2;
    case "*":
      return par1 * par2;
    default:
      break;
  }
}
