class Parser {
  constructor (txt) {
    this.text = txt
    this.index = 0
  }

  hasRemainingTokens () {
    return this.index < this.text.length
  }

  getRepeat () {
    while (this.text.charAt(this.index++) !== '[' && this.hasRemainingTokens()) {}
    let start = this.index

    let bracketCount = 1
    while (bracketCount > 0 && this.hasRemainingTokens()) {
      let char = this.text.charAt(this.index++)
      if (char === '[') {
        bracketCount++
      } else if (char === ']') {
        bracketCount--
      }
    }
    let end = this.index
    return this.text.substring(start, end - 1)
  }

  nextToken () {
    let token = ''
    let char = this.text.charAt(this.index)

    // if it's a space, ignore
    if (char === ' ') {
      this.index++
      return this.nextToken()
    }

    // if it's a bracker, send back
    if (char === '[' || char === ']') {
      this.index++
      return char
    }

    // otherwise, accumulate
    while (char !== ' ' && this.hasRemainingTokens()) {
      token += char
      char = this.text.charAt(++this.index)
    }

    return token
  }

  parse () {
    let commands = []
    // Regexes
    let movement = /^([fb]d|[lr]t)$/
    let pen = /^p/
    let repeat = /^repeat$/

    while (this.hasRemainingTokens()) {
      let token = this.nextToken()
      if (movement.test(token)) {
        let cmd = new Command(token, this.nextToken())
        commands.push(cmd)
      } else if (pen.test(token)) {
        let cmd = new Command(token)
        commands.push(cmd)
      } else if (repeat.test(token)) {
        let cmd = new Command(token, this.nextToken())
        let toRepeat = this.getRepeat()
        let parser = new Parser(toRepeat)
        cmd.commands = parser.parse()
        commands.push(cmd)
      }
    }
    return commands
  }
}
