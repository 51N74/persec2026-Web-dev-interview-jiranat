export function sortStringWithNumbers(arrayList:string[]):string[]{
return arrayList.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}


