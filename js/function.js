function checkingLength(string, length) {
  return string.length <= length;
}

console.log(checkingLength('проверяемая строка', 20));
console.log(checkingLength('проверяемая строка', 28));
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

console.log(isPalidrom('топот'));
console.log(isPalidrom('ДовОд'));
console.log(isPalidrom('Кекс'));
console.log(isPalidrom('Лёша на полке клопа нашёл '));

function divTime(time) {
  const [hour, minute] = time.split(':');
  return hour * 60 + Number(minute);
}

function getTime(begining, ending, start, duration) {
  const beginingInMinute = divTime(begining);
  const endingInMinute = divTime(ending);
  const startInMinute = divTime(start);

  if (startInMinute >= beginingInMinute && startInMinute + duration <= endingInMinute) {
    return true;
  }
  else {
    return false;
  }
}
