export default function caesarCipher(string, shiftFactor) {
  if (shiftFactor === 0 || shiftFactor === 26) {
    return string;
  }

  shiftFactor = shiftFactor % 26;

  let shiftedString = "";

  for (const index in string) {
    const charChode = string.charCodeAt(index);
    let newCharCode;
    if (charChode >= 97 && charChode <= 122) {
      newCharCode = charChode + shiftFactor;
      if (newCharCode > 122) {
        newCharCode = 96 + (newCharCode - 122);
      } else if (newCharCode < 97) {
        newCharCode = 123 - (97 - newCharCode);
      }
    } else if (charChode >= 65 && charChode <= 90) {
      newCharCode = charChode + shiftFactor;
      if (newCharCode > 90) {
        newCharCode = 64 + (newCharCode - 90);
      } else if (newCharCode < 65) {
        newCharCode = 91 - (65 - newCharCode);
      }
    } else {
      newCharCode = charChode;
    }
    shiftedString += String.fromCharCode(newCharCode);
  }

  return shiftedString;
}
