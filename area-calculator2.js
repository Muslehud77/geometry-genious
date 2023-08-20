
function input(inputId){
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value)
    return inputValue;
}
function setArea(areaId, area){
    const areaStatus = document.getElementById(areaId)
    areaStatus.innerText = area.toFixed(2);
}



function calculateTriangleArea(){
    const base = input('triangle-base-input');
    const height = input('triangle-height-input');

    const area = 0.5 * base * height;
    if(isNaN(area)){
        return 0;
    }
    else{
        setArea("triangle-area", area);
    }
    areaCalculate("type-triangle", area);
};


function calculateRectangleArea() {
  const w = input("rectangle-w-input");
  const l = input("rectangle-l-input");

  const area = w * l;
  if (isNaN(area)) {
    return 0;
  } else {
    setArea("rectangle-area", area);
  }
  areaCalculate("type-rectangle", area);
};


function calculateParallelogramArea() {
  const base = input("parallelogram-b-input");
  const height = input("parallelogram-h-input");

  const area = base * height;
  if (isNaN(area)) {
    return 0;
  } else {
    setArea("parallelogram-area", area);
  }
  areaCalculate("type-parallelogram", area);
};


function calculateRhombusArea() {
  const d1 = input("rhombus-d1-input");
  const d2 = input("rhombus-d2-input");

  const area = 0.5 * d1 * d2;
  if (isNaN(area)) {
    return 0;
  } else {
    setArea("rhombus-area", area);
  }
  areaCalculate("type-rhombus", area);
};


function calculatePentagonArea() {
  const p = input("pentagon-p-input");
  const b = input("pentagon-b-input");

  const area = 0.5 * p * b;
  if (isNaN(area)) {
    return 0;
  } else {
    setArea("pentagon-area", area);
  }
  areaCalculate("type-pentagon", area);
};


function calculateEllipseArea() {
  const a = input("ellipse-a-input");
  const b = input("ellipse-b-input");

  const area = 3.1416 * a * b;
  if (isNaN(area)) {
    return 0;
  } else {
    setArea("ellipse-area", area);
  }
  
  areaCalculate("type-ellipse", area);
};



 function areaCalculate(typeId , area){
    const calculationList = document.getElementById("calculation-list");
    const count = 1 + calculationList.childElementCount;
    const type = document.getElementById(typeId); 
    const fixArea = area.toFixed(2);
    const calculation = document.createElement("p");
    calculation.innerHTML = `<span>${count}. ${type.innerText} ${fixArea}</span>cm<sup>2</sup> <button onclick="convertToM2(this)" class="btn btn-sm">Convert m&sup2;</button> `;
    calculationList.appendChild(calculation);
 }

 function convertToM2(data){
    const areaType = data.parentNode.childNodes[0].innerText.split(" ")[1];
    const areaToConvert = data.parentNode.childNodes[0].innerText.split(" ")[2];
    const convertedArea = (parseFloat(areaToConvert) / 100).toFixed(2);
    const calculationList = document.getElementById("calculation-list");
    const count = 1 + calculationList.childElementCount;
    const calculation = document.createElement("p");
     calculation.innerHTML = `<span>${count}.</span><span> ${areaType} ${convertedArea}</span>m<sup>2</sup>`;
    //  calculation.innerHTML = `<span>${count}.</span><span> ${areaType} ${convertedArea}</span>m<sup>2</sup>`;
    for(const list of calculationList.childNodes) {
        // console.log(list.childNodes[1]);
        // console.log(calculation.childNodes[1]);
         if (list.innerHTML === calculation.innerHTML) {
           return 0;
         } else {
           calculation.innerHTML = `<span> ${areaType} ${convertedArea}</span>m<sup>2</sup>`;
        //    calculation.innerHTML = `<span>${count}.</span><span> ${areaType} ${convertedArea}</span>m<sup>2</sup>`;
         }
    }
    
       
    
calculationList.appendChild(calculation);

    
 }

 function clearr(){
    document.getElementById("calculation-list").innerHTML = '';
 }
