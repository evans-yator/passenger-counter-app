let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}
function decrement(){
    count -= 1
    countEl.textContent = count
    if (count <= 0){
        alert("COUNT CANNOT BE LESS THAN ZERO(0)")
        countEl.textContent = 0
        count = 0
    }
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countStr = count + " - "
    saveEl.textContent +=  countStr
    countEl.textContent = 0
    count = 0
}