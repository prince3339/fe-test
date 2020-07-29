const characterCount = (counter: Record<string, any> , character: string) => {
  if (counter[character]) {
    counter[character]++;
  } else {
    counter[character] = 1;
  }
  return counter;
}

const anagramChecker = (stringOne: string, stringTwo: string): boolean => {
  const stringOneCharacterCount = stringOne.split('').reduce(characterCount, {})
  const stringTwoCharacterCount = stringTwo.split('').reduce(characterCount, {})

  for (let character in stringOneCharacterCount) {
    if (stringOneCharacterCount[character] !== stringTwoCharacterCount[character]) {
      return false
    }
  }

  return stringOne.length === stringTwo.length; 
}

export default anagramChecker;