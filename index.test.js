const findComplement = require("./index.js");


describe("findComplement", ()=> {
it ("should return [2,7] for [2,7,11,15] for target 9", ()=>{
    const nums = [2,7,11,15]
    const target = 9
    const result = findComplement(nums, target)
    expect(result).toEqual([2,7])
})
})