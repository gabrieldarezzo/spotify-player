export default function ConvertToHumanTime(timeInMs) {
  let s = parseInt((timeInMs / 1000) % 60, 10);
  const m = parseInt((timeInMs / (1000 * 60)) % 60, 10);


  s = (s < 10) ? `0${s}` : s;
  return `${m}:${s}`;
}
