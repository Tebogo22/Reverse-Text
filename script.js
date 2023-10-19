function reverseString(myString){
	const stringWords = myString.split(' ')
	let stringPieces;
	let myReversedStringArray = []

	for(let i = 0; i < stringWords.length; i++){
			stringPieces = stringWords[i].split('')
			let puncChar = []
		
			for(let c = 0; c < stringPieces.length; c++){

				let characterValue = stringPieces[c].charCodeAt(stringPieces[c])
				if( (characterValue >= 32 && characterValue <= 47) || (characterValue >= 58 && characterValue <= 64) ||
					(characterValue >= 91 && characterValue <= 96) || (characterValue >= 123 && characterValue <= 126)){
						let removedValue = stringPieces.splice(c,1)
						puncChar = puncChar.concat([removedValue])
					}	
			}
			let reversedPieces = stringPieces.reverse()
			myReversedStringArray = myReversedStringArray.concat(reversedPieces.concat(puncChar).join(''))
		}
		return myReversedStringArray.join(' ')
}

console.log(reverseString('Hello, I am Tebogo. You are?'))
