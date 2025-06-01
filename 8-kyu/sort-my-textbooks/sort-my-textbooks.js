 
function sorter(textbooks) {
  let books=['math','physics','computer science','english']
  books.sort((a,b)=> a.toUpperCase().localeCompare(b.toUpperCase))
  return textbooks;
}