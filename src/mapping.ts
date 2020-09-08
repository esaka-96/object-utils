import { isObject } from '.';
export const mapById = (obj: any, index: number, arr: any[]) => isObject(obj) ? obj.id : undefined;
