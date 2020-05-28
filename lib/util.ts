import dayjs from "dayjs";

export function getAge(birthday: string): string {
  // 誕生年月日
  const birthdayDate = dayjs(birthday);
  // 今日
  const today = dayjs();
  // 今年の誕生日
  const thisYearBirthday = dayjs(today.year(), (birthdayDate.month() + 1).toString(), birthdayDate.date().toString());
  const age = today.year() - birthdayDate.year();
  return today < thisYearBirthday ? (age - 1).toString() : age.toString();
}

export function getSex(sexCode: number): string {
  switch (sexCode) {
    case 1:
      return "牡";
    case 2:
      return "牝";
    case 3:
      return "セ";
    default:
      return "";
  }
}
