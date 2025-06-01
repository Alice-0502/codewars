function sorter(textbooks) {
  let textbooks=['math','physics','computer science']
  return textbooks.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase));
}