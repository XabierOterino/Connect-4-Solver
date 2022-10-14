// CONNECT 4 GAME

// Given a 8*6 table with values of either null, 1 or 2 check for winners looking
//for matches of 4 same characters in a row horizontally or vertically


//Set up a simple table
let simpleTable = new Array(8).fill(null).map(()=>new Array(6).fill(null))
table[2][1] = 1
table[2][2] = 1
table[2][3] = 1
table[2][4] = 1

// Visualize table
console.table(table)

//Look for horizontal matches
const checkHorizontal = (table) => {
    for(let y=0; y<table.length; y++){
        let last = null
        let count = 0
        for(let x=0; x<table[y].length;x++){
            if(table[y][x]!=null){
                count++
                last = table[y][x]
            }
        }
        if(count>=4) return true
        count=0
        last = 0
        
    }
    return false    
}

// Look for vertical matches
const checkVertical = (table) => {
    let column = 0
    for(let x=0; x<table[column].length; x++){
        let last = null
        let count = 0
        for(let y=0; y<table.length;y++){
            if(table[y][x]!=null){
                count++
                last = table[y][x]
            }
        }
        if(count>=4) return true
        count=0
        last = 0
        column ++
    }
    return false
}

const checkTable = (table) => {
    // return true if either one or other is true
    return (checkHorizontal(table)|| checkVertical(table))
}

console.log(checkTable(simpleTable))