function sorter(textbooks) {
  let books=['math','physics','computer science','english']
  books.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase));
  return textbooks;
​
}