function pickQuestions(n, list) {
  const copy = Array.from(list);
  return Array.from(Array(n), () => copy.splice(Math.floor(copy.length * Math.random()), 1)[0]);
}

export default pickQuestions;