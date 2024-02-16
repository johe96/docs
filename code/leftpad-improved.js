module.exports = leftPad
export function leftPad(str, len, ch) {
    return new Array(len - str.length).fill(!ch && ch !== 0 ? ' ' :ch).join("") + str
}

