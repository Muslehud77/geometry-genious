
function calculateTriangleArea(data){
    let areaTotal = 0;
    const input1 = data.parentNode.parentNode.childNodes[5].childNodes[1].value;
    const input2 = data.parentNode.parentNode.childNodes[5].childNodes[5].value;
    const areaCalc = data.parentNode.parentNode.childNodes[7].childNodes[1]

    areaTotal = 0.5 * parseFloat(input1) * parseFloat(input2)
  
    if(isNaN(areaTotal)){
        return;
    }
    else{
        areaCalc.innerText = areaTotal.toFixed(2)
    }
   
}

function calculateRectangleArea(data){
    let areaTotal = 0;
    const input1 = data.parentNode.parentNode.childNodes[5].childNodes[1].value;
    const input2 = data.parentNode.parentNode.childNodes[5].childNodes[5].value;
    const areaCalc = data.parentNode.parentNode.childNodes[7].childNodes[1]

    areaTotal = parseFloat(input1) * parseFloat(input2)
  
    if(isNaN(areaTotal)){
        return;
    }
    else{
        areaCalc.innerText = areaTotal.toFixed(2)
    }
   
}
function calculateParallelogramArea(data){
    let areaTotal = 0;
    const input1 = data.parentNode.parentNode.childNodes[5].childNodes[1].value;
    const input2 = data.parentNode.parentNode.childNodes[5].childNodes[5].value;
    const areaCalc = data.parentNode.parentNode.childNodes[7].childNodes[1]

    areaTotal = parseFloat(input1) * parseFloat(input2)
  
    if(isNaN(areaTotal)){
        return;
    }
    else{
        areaCalc.innerText = areaTotal.toFixed(2)
    }
   
}