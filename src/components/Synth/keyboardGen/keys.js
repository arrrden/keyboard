import { zip } from '../../utils/utils'

// constants
const _KEYBOARD_MODEL = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];  // constant defining shape of keyboard
const _BLACK_KEYS = Array.from("1234567890-="); // available upper line keys
const _WHITE_KEYS = Array.from("qwertyuiop[]"); // available lower line keys
const _REFERENCE_NOTE = { name: { pitch: "A", number: 3 }, frequency: 220 }; // reference pitch to calculate frequencies
const _SEMITONE = Math.pow(2, 1 / 12); // constant defining distance between ADJACENT semitones 

// returns a [frequency, pitch, octaveNumber] tuple for the lowest key
export function getReferenceFrequency(note, octaveNumber) {
  const { name: { pitch, number }, frequency } = _REFERENCE_NOTE;

  if (note + octaveNumber === pitch + number) return [frequency, pitch, number]

  // how many octaves higher or lower is the start key
  const octaveRef = () => { 
    if (octaveNumber === number) return octaveNumber;
    return octaveNumber - number;
  };

  // returns reference frequency
  const newRefFreq = () => { 
    return octaveRef() < 0 
    ? frequency / ((octaveRef() * 2) * -1)
    : frequency * (octaveRef() * 2)
  }

  return [newRefFreq(), ...arguments]
}

// for frequency f return next frequency
const nextSemitone = f => { 
  return f * _SEMITONE
}

// Returns an array of frequncies for each key
export function getKeyFrequencies() {
  const memo = []
  const keyFrequencies = (referenceFreq, noOfKeys) => {
    let newFreq = nextSemitone(referenceFreq)
    if (noOfKeys >= 1) {
      memo.push(referenceFreq)
      return keyFrequencies(newFreq, noOfKeys - 1)
    }
    return memo
  }
  return keyFrequencies(...arguments)
}

// Returns a keyboardDefinition of any length up to 2 octaves
export function getKeyboardDefinition(keyboardLength, keyboardModel) {
  if (keyboardLength === keyboardModel.length) return keyboardModel
  if (keyboardLength > keyboardModel.length) {
    let long = keyboardModel.concat(keyboardModel).slice(0, keyboardLength)
    return long
    } else {
      let short = keyboardModel.slice(0, keyboardLength)
      return short
  }
}

// returns a tuple of the note name mapped to a key on the keyboard
export function getKeyTuples(keyboardDefinition, whiteKeys, blackKeys) {
  return keyboardDefinition.map((i, index) => {
    if (i.length === 1) {
      return [i, whiteKeys.shift()] 
    } else {
      if (keyboardDefinition[index - 2]?.length === 2) {
         return [i, blackKeys.shift()] 
      } 
      blackKeys.shift() 
      return [i, blackKeys.shift()]
    }
  })
}

// returns tuples in form of [frequency: number, [noteName: string, keyboardKey: string]] 
const GetKeyTuples = (numberOfKeys, noteName, octaveNumber) => {
  const referenceFrequency = getReferenceFrequency(noteName, octaveNumber)[0]
  const frequencies = getKeyFrequencies(referenceFrequency, numberOfKeys)
  const keyboardDef = getKeyboardDefinition(numberOfKeys, _KEYBOARD_MODEL)
  const keyboardTuples = getKeyTuples(keyboardDef, _WHITE_KEYS, _BLACK_KEYS)
  return zip(frequencies, keyboardTuples)
}

export default GetKeyTuples