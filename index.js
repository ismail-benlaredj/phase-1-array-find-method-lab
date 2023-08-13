// code your solution here
const superbowlWin = (record) => {
    let obj = record.find(e => e.result === "W")
    return obj ? obj.year : undefined
} 