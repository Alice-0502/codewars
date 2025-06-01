function twoSort(s) {
  let names= ['Alice','Flavienne','Kenia']
  names.sort((a,b)=> a.localeCompare(b));
  return s.sort(names).split('').join('***');
​
}