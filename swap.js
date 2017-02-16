export default function swap(chars, i, j){
  var temp = chars[i];
  chars[i] = chars[j]
  chars[j] = temp
  return chars
}