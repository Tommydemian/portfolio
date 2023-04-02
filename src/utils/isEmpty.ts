export function isEmpty(val:unknown):boolean{
  return val == null ||
  typeof val == 'object' && Object.keys(val).length == 0 ||
  typeof val == 'string' && val.trim().length  == 0 
}