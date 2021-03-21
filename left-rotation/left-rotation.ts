function leftRotation(d: number, arr: number[]): number[] {
  const newArr: number[] = [...arr]
  const leftPart = newArr.splice(0, d)
  return newArr.concat(leftPart)
}