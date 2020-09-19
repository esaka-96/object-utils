/**
 * @summary Sums numbers
 * @param {...number[]} args 
 */
export function sum(...args: number[]): number {
  args = args.filter(x => {
    if(x === null || x === undefined || typeof x !== 'number') {
      return false;
    }
    if(Number.isNaN(x)) return false;
    return true;
  })
  let result = 0;
  for(let n of args) {
    result += n;
  }
  return result;
}

export const summing: (cur: number, next: number, index: number, array: number[]) => number =  (cur: number, next: number) => sum(cur, next);

export function summingBy<T extends object, K extends keyof T>(field: K): (cur: number, next: T, index: number, array:T[]) => number {
  if(!field) throw new Error('Field is required');
  return (cur: number, next: T) => {
    if(!next || typeof next !== 'object') return cur;
    let extracted = <number><unknown>next[field];
    extracted = (extracted && !Number.isNaN(extracted)) ? extracted : 0;
    return sum(cur, extracted);
  }
}