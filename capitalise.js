export default function capitalise(string) {
  return string ? string.at(0).toUpperCase().concat(string.substring(1)) : "";
}
