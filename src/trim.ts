export default function (value: string) {
  return value.length < 1 ? 0 : value.trim();
}
