const placeValues = ["ones", "tens", "hundreds", "thousands"];

export const getRandomPlaceVal = () => {
  const random = Math.floor(Math.random() * placeValues.length);
  return placeValues[random];
};

function mutliStringReplace(object, string) {
  var val = string;
  var entries = Object.entries(object);
  entries.forEach((para) => {
    var find = "{" + para[0] + "}";
    var regExp = new RegExp(find, "g");
    val = val.replace(regExp, para[1]);
  });
  return val;
}

export const getQuestionAnswer = (templateString) => {
  var obj = {
    number: getRandomNumer(),
    placeVal: getRandomPlaceVal(),
  };

  return mutliStringReplace(obj, templateString);
};

export const getQuestion = (templateString) => {
  var obj = {
    number: getRandomNumer(),
    placeVal: getRandomPlaceVal(),
  };

  var result = {
    question: mutliStringReplace(obj, templateString),
    number: obj.number,
    placeVal: obj.placeVal,
  };
  return result;
};

export const getRandomNumer = () => {
  //Do something with the input
  return Math.floor(1000 + Math.random() * 9000);
};

export const getPlaceValueofNumber = (num, placeValue) => {
  var res;
  switch (placeValue) {
    case "ones":
      res = Math.floor(num % 10);
      break;
    case "tens":
      res = Math.floor((num / 10) % 10);
      break;
    case "hundreds":
      res = Math.floor((num / 100) % 10);
      break;
    case "thousands":
      res = Math.floor((num / 1000) % 10);
      break;
    case "tenThousands":
      res = Math.floor((num / 10000) % 10);
      break;
    case "hundredThousands":
      res = Math.floor((num / 100000) % 10);
      break;
    case "millions":
      res = Math.floor((num / 1000000) % 10);
      break;
    case "tenMillions":
      res = Math.floor((num / 10000000) % 10);
      break;
    case "hundredMillions":
      res = Math.floor((num / 100000000) % 10);
      break;
    default:
      res = 0;
  }
  return res;
};

export const justAnAlert = () => {
  alert("hello");
};
