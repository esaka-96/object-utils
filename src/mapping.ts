import { isObject } from '.';
/**
 * @summary Provides a mapping function which maps by id field of objects
 * @param obj Object to Map
 * @param index Index of the Object in Array
 * @param arr Array to Map 
 */
export const mapById = (obj: any, index: number, arr: any[]) => isObject(obj) ? obj.id : undefined;
/**
 * @summary Provides a mapping function which maps by value field of objects
 * @param obj Object to Map
 * @param index Index of the Object in Array
 * @param arr Array to Map 
 */
export const mapByValue = (obj: any, index: number, arr: any[]) => isObject(obj) ? obj.value : undefined;
/**
 * @summary Provides a mapping function which maps by type field of objects
 * @param obj Object to Map
 * @param index Index of the Object in Array
 * @param arr Array to Map 
 */
export const mapByType = (obj: any, index: number, arr: any[]) => isObject(obj) ? obj.type : undefined;
/**
 * @summary Provides a mapping function which maps by name field of objects
 * @param obj Object to Map
 * @param index Index of the Object in Array
 * @param arr Array to Map 
 */
export const mapByName = (obj: any, index: number, arr: any[]) => isObject(obj) ? obj.name : undefined;
/**
 * @summary Provides a mapping function which maps by the field represented by name parameter
 * @param field Name of the Field to Map the Objects by
 */
export const mapBy = (field: string | number) => (obj: any, index: number, arr: any[]) => (isObject(obj) && (!!field || field === 0)) ? obj[field] : undefined;
