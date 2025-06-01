function sorter(textbooks) {
  let textbooks=['math','physics','computer science','english']
  return textbooks.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase));
}