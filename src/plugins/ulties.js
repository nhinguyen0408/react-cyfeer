export const converNumber = (number, prefix = '') => {
    const value = Number(number || 0)
    return `${value.toLocaleString('de-DE')}${prefix}`
}