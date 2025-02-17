//Функция для проверки длины строки

const checkStringLength = (string = "", maxLength = 1) => (string.length <= maxLength);

//Функция для проверки, является ли строка палиндромом

const checkPolindrom = (string = "") => {
  string = string.replaceAll(" ", "");
  string = string.toLowerCase();

  let optimazedString = "";

  for (let i = string.length - 1; i >= 0; i --) {
    optimazedString += string.at(i);
  }

  return optimazedString === string;
}

//Функция принимает строку, извлекает цифры и возвращает их в виде целого положительного числа

const extractInteger = (string = "") => {

  string = string.toString();

  let result = "";

  for (let i = 0; i <= string.length - 1; i ++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
   result += string[i];
   }
  };

  return result === '' ? NaN : Number(result);
};
