import { isObject } from '.';
export const mapById = (obj: any, index: number, arr: any[]) => isObject(obj) ? obj.id : undefined;
export const mapByValue = (obj: any, index: number, arr: any[]) => isObject(obj) ? obj.value : undefined;
export const mapByType = (obj: any, index: number, arr: any[]) => isObject(obj) ? obj.type : undefined;
export const mapByName = (obj: any, index: number, arr: any[]) => isObject(obj) ? obj.name : undefined;
export const mapBy = (field: string | number) => (obj: any, index: number, arr: any[]) => (isObject(obj) && (!!field || field === 0)) ? obj[field] : undefined;
