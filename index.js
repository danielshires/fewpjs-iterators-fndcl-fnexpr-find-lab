// let find = [1, 3, 5, 6, 8].find(function(e) {
//     return e % 2 === 0
// })

// console.log(find)

const record = [{
        year: "2018",
        result: "L"
    },
    {
        year: "2017",
        result: "W"
    },
    {
        year: "2016",
        result: "N/A"
    }
    //...
]

function superbowlWin(obj) {

    let yearWon = obj.find(function(e) {
        return e.result === "W"
    })

    if (yearWon) {
        return yearWon.year
    }

}

console.log(superbowlWin(record))