function checkingLength(string, length) {
  return string.length <= length;
}
// eslint-disable-next-line no-console
console.log(checkingLength('проверяемая строка', 20));
// eslint-disable-next-line no-console
console.log(checkingLength('проверяемая строка', 28));
// eslint-disable-next-line no-console
console.log(checkingLength('проверяемая строка', 10));


function isPalidrom(rawString) {
  const string = rawString.replaceAll(' ','').toLowerCase;
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(string.length - 1 - i)) {
      return false;
    }
  }
  return true;
}
// eslint-disable-next-line no-console
console.log(isPalidrom('топот'));
// eslint-disable-next-line no-console
console.log(isPalidrom('ДовОд'));
// eslint-disable-next-line no-console
console.log(isPalidrom('Кекс'));
// eslint-disable-next-line no-console
console.log(isPalidrom('Лёша на полке клопа нашёл '));

