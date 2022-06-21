document.createElement

const squares=document.getElementsByTagName('table')[0]
function makeRow(){
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++){
        const td = document.createElement('td')
        row.appendChild(td)
    }
    squares.appendChild(row)
}

makeRow()
makeRow()


