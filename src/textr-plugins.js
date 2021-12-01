function ndash(input) {
  return input.replace(/(?<!-)--(?!-)/gim, "–")
}

function mdash(input) {
  return input.replace(/(?<!-)\s?---\s?(?!-)/gim, "—")
}

module.exports.plugins = [ndash, mdash]
