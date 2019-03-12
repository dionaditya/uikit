function slug (text, replacement = '-') {
  return text.toLowerCase(text)
    .replace(/\W/gi, replacement)
    .replace(RegExp(replacement + '{2,}', 'gi'), replacement)
    .replace(RegExp(replacement + '$'), '')
    .replace(RegExp('^' + replacement), '')
}

export default slug
