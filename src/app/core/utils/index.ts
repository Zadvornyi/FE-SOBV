export function getDeepValueFromObj(obj: any, path: string):any {
  const pathArray = path.split('.')
  for (let i = 0 , len = pathArray.length; i < len; i++) {
    if (!obj[pathArray[i]]) return null;
    obj = obj[pathArray[i]];
  }
  return obj;
};
