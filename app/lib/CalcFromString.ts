export function calculate(prev : string) {
  const values = prev.split(" ");
  while (values.length >= 3) {
    const currentAction = values.splice(0, 3);
    switch (currentAction[1]) {
      case ("+") : {
        values.unshift(`${Number(currentAction[0]) + Number(currentAction[2])}`);
        break;
      }
      case ("-") : {
        values.unshift(`${Number(currentAction[0]) - Number(currentAction[2])}`)
        break;
      }
      case ("*") : {
        values.unshift(`${Number(currentAction[0]) * Number(currentAction[2])}`)
        break;
      }
      case ("/") : {
        values.unshift(`${Number(currentAction[0]) / Number(currentAction[2])}`)
        break;
      }
      default : {
        return "error"
      }
      
    }
  }
  return values[0];
}