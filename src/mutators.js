

export const increase = (index, max) => {
    if (index == max) {
        index = 0;
    } else index = index + 1;
    return index
}

export const decrease = (index, max) => {
    if (index == 0) {
        index = max;
    } else index = index - 1;
    return index
}

export const rand = (index, max) => {
    let newIndex = 0
    do { newIndex = Math.floor(Math.random() * max) } while (newIndex === index)
    return newIndex
}