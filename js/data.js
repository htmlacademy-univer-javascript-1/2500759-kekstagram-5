import {getRandomArrayElemnt} from './util.js';
import {getRandomInteger} from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTION = [
  'я не придумал'
];
const NAMES = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const createId = () => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
};

const commentId = createId();

const createMessage = () => Array.from(
  {length:getRandomInteger(1,2)},
  () => getRandomArrayElemnt(COMMENT_LINES),
).join(' ');

const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  massege: createMessage(),
  name: getRandomArrayElemnt(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElemnt(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
  comment: Array.from(
    {length: getRandomInteger(0, COMMENT_COUNT)},
    createComment,
  ),
});

const getPicture = () => Array.from(
  {length: PICTURE_COUNT},
  (_index, pictureIndex) => createPicture(pictureIndex + 1),
);

getPicture();

export {getPicture};
