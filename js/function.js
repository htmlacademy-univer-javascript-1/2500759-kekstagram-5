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

function divTime(time) {
  const [hour, minute] = time.split(':');
  return hour * 60 + Number(minute);
}

// eslint-disable-next-line no-unused-vars
function getTime(begining, ending, start, duration) {
  const beginingInMinute = divTime(begining);
  const endingInMinute = divTime(ending);
  const startInMinute = divTime(start);

  if (startInMinute >= beginingInMinute && startInMinute + duration <= endingInMinute) {
    return true;
  } else {
    return false;
  }
}

getTime('08:00', '17:30', '14:00', 90);
getTime('8:0', '10:0', '8:0', 120);
getTime('08:00', '14:30', '14:00', 90);
getTime('14:00', '17:30', '08:0', 90);
getTime('8:00', '17:30', '08:00', 900);
