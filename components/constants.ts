export const DUMMY_IMAGE =
  "https://3.bp.blogspot.com/-DVHqPcbR9fA/VkxMAs3sgsI/AAAAAAAA0ss/ofdmv2PEXWo/s800/sports_keiba.png";

export type WakuNumberStyle = {
  backgroundColor: string;
  color: string;
};

export const firstWaku = {
  backgroundColor: "white",
  color: "black",
};

export const secondWaku = {
  backgroundColor: "black",
  color: "white",
};

export const thirdWaku = {
  backgroundColor: "red",
  color: "white",
};

export const fourthWaku = {
  backgroundColor: "blue",
  color: "white",
};

export const fifthWaku = {
  backgroundColor: "yellow",
  color: "white",
};

export const sixthWaku = {
  backgroundColor: "green",
  color: "white",
};

export const seventhWaku = {
  backgroundColor: "orange",
  color: "white",
};

export const eighthWaku = {
  backgroundColor: "pink",
  color: "white",
};

export function getWakuNumberStyleArray(length: number): WakuNumberStyle[] {
  switch (length) {
    case 6:
      return [firstWaku, secondWaku, thirdWaku, fourthWaku, fifthWaku, sixthWaku];
    case 7:
      return [firstWaku, secondWaku, thirdWaku, fourthWaku, fifthWaku, sixthWaku, seventhWaku];
    case 8:
      return [firstWaku, secondWaku, thirdWaku, fourthWaku, fifthWaku, sixthWaku, seventhWaku, eighthWaku];
    case 9:
      return [firstWaku, secondWaku, thirdWaku, fourthWaku, fifthWaku, sixthWaku, seventhWaku, eighthWaku, eighthWaku];
    case 10:
      return [
        firstWaku,
        secondWaku,
        thirdWaku,
        fourthWaku,
        fifthWaku,
        sixthWaku,
        seventhWaku,
        seventhWaku,
        eighthWaku,
        eighthWaku,
      ];
    case 11:
      return [
        firstWaku,
        secondWaku,
        thirdWaku,
        fourthWaku,
        fifthWaku,
        sixthWaku,
        sixthWaku,
        seventhWaku,
        seventhWaku,
        eighthWaku,
        eighthWaku,
      ];
    case 12:
      return [
        firstWaku,
        secondWaku,
        thirdWaku,
        fourthWaku,
        fifthWaku,
        fifthWaku,
        sixthWaku,
        sixthWaku,
        seventhWaku,
        seventhWaku,
        eighthWaku,
        eighthWaku,
      ];
    case 13:
      return [
        firstWaku,
        secondWaku,
        thirdWaku,
        fourthWaku,
        fourthWaku,
        fifthWaku,
        fifthWaku,
        sixthWaku,
        sixthWaku,
        seventhWaku,
        seventhWaku,
        eighthWaku,
        eighthWaku,
      ];
    case 14:
      return [
        firstWaku,
        secondWaku,
        thirdWaku,
        thirdWaku,
        fourthWaku,
        fourthWaku,
        fifthWaku,
        fifthWaku,
        sixthWaku,
        sixthWaku,
        seventhWaku,
        seventhWaku,
        eighthWaku,
        eighthWaku,
      ];
    case 15:
      return [
        firstWaku,
        secondWaku,
        secondWaku,
        thirdWaku,
        thirdWaku,
        fourthWaku,
        fourthWaku,
        fifthWaku,
        fifthWaku,
        sixthWaku,
        sixthWaku,
        seventhWaku,
        seventhWaku,
        eighthWaku,
        eighthWaku,
      ];
    case 16:
      return [
        firstWaku,
        firstWaku,
        secondWaku,
        secondWaku,
        thirdWaku,
        thirdWaku,
        fourthWaku,
        fourthWaku,
        fifthWaku,
        fifthWaku,
        sixthWaku,
        sixthWaku,
        seventhWaku,
        seventhWaku,
        eighthWaku,
        eighthWaku,
      ];
    case 17:
      return [
        firstWaku,
        firstWaku,
        secondWaku,
        secondWaku,
        thirdWaku,
        thirdWaku,
        fourthWaku,
        fourthWaku,
        fifthWaku,
        fifthWaku,
        sixthWaku,
        sixthWaku,
        seventhWaku,
        seventhWaku,
        eighthWaku,
        eighthWaku,
        eighthWaku,
      ];
    case 18:
      return [
        firstWaku,
        firstWaku,
        secondWaku,
        secondWaku,
        thirdWaku,
        thirdWaku,
        fourthWaku,
        fourthWaku,
        fifthWaku,
        fifthWaku,
        sixthWaku,
        sixthWaku,
        seventhWaku,
        seventhWaku,
        seventhWaku,
        eighthWaku,
        eighthWaku,
        eighthWaku,
      ];
    default:
      return [];
  }
}
