function onincrement(){
    // console.log("onincrement function is triggered")
    let count_ele=document.getElementById("count")
    // console.log(a,a.textContent)
    let number=parseInt(count_ele.textContent)      // "0"(str) -> 0(int)
    count_ele.textContent=number+1
    let value=parseInt(count_ele.textContent)
    if (value>0){
        count_ele.style.color="green"
    }else if (value<0){
        count_ele.style.color="red"
    }else{
        count_ele.style.color="black"
    }
}

function ondecrement(){
    let count_ele=document.getElementById("count")
    let number=parseInt(count_ele.textContent)
    count_ele.textContent=number-1
    let value=parseInt(count_ele.textContent)
    if (value>0){
        count_ele.style.color="green"
    }else if (value<0){
        count_ele.style.color="red"
    }else{
        count_ele.style.color="black"
    }
}

// Patters
for (let i=0;i<=5;i++){
    stars=""
    for (let j=0;j<1+i;j++){
        stars+=" *"
    }
    console.log(stars)
}

for (let i=0;i<=5;i++){
    stars=""
    for (let j=0;j<5-i;j++){
        stars+=" *"
    }
    console.log(stars)
}