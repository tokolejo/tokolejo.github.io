//select reuslt text
const resultgrow = document.getElementById('result-grow');
const resultmicro = document.getElementById('result-micro');
const resultbloom = document.getElementById('result-bloom');
const result = document.getElementById('result');
const button = document.getElementById('submit-btn').onclick = () => {
    getValueFunction();
}
//selector
const selector = document.getElementById('selectorid')

// arrays of tripart fert
const firstRoot = {
    Grow: 0.2,
    Micro: 0.2,
    Bloom: 0.2,
}
const firstLeaf = {
    Grow: 0.6,
    Micro: 0.6,
    Bloom: 0.6,
}
const veg = {
    Grow: 1.5,
    Micro: 1,
    Bloom: 0.5,
}
const preFlowering = {
    Grow: 1.5,
    Micro: 1.5,
    Bloom: 1,
}
const flowering = {
    Grow: 0.7,
    Micro: 1.4,
    Bloom: 2.1,
}
// calculator function for fert. 
const getValueFunction = function() {
    let inputValueNumber = document.getElementById("input-ml").valueAsNumber;
// value for first roots;
    if( getValuefirstRoot = selector.options[selector.selectedIndex].value == 'val1'){
        resultgrow.innerHTML = inputValueNumber * firstRoot.Grow + ' მ/ლ '+' Tripart Grow ';
        resultmicro.innerHTML = inputValueNumber * firstRoot.Micro + ' მ/ლ '+' Tripart Micro ';
        resultbloom.innerHTML = inputValueNumber * firstRoot.Bloom + ' მ/ლ '+' Tripart Bloom ';
    };
// value for first leaf;
    if( getValuefirstLeaf = selector.options[selector.selectedIndex].value == 'val2'){
        resultgrow.innerHTML = inputValueNumber * firstLeaf.Grow + ' მ/ლ '+' Tripart Grow ';
        resultmicro.innerHTML = inputValueNumber * firstLeaf.Micro + ' მ/ლ '+' Tripart Micro ';
        resultbloom.innerHTML = inputValueNumber * firstLeaf.Bloom + ' მ/ლ '+' Tripart Bloom ';
    }
// value for vegetation;
    if( getValueVeg = selector.options[selector.selectedIndex].value == 'val3'){
        resultgrow.innerHTML = inputValueNumber * veg.Grow + ' მ/ლ '+' Tripart Grow ';
        resultmicro.innerHTML = inputValueNumber * veg.Micro + ' მ/ლ '+' Tripart Micro ';
        resultbloom.innerHTML = inputValueNumber * veg.Bloom + ' მ/ლ '+' Tripart Bloom ';
    }
// value for preflowering
    if( getValuepreFlowering = selector.options[selector.selectedIndex].value == 'val4'){
        resultgrow.innerHTML = inputValueNumber * preFlowering.Grow + ' მ/ლ '+' Tripart Grow ';
        resultmicro.innerHTML = inputValueNumber * preFlowering.Micro + ' მ/ლ '+' Tripart Micro ';
        resultbloom.innerHTML = inputValueNumber * preFlowering.Bloom + ' მ/ლ '+' Tripart Bloom ';
    }
// value for flowering
    if( getValueBloom = selector.options[selector.selectedIndex].value == 'val5'){
        resultgrow.innerHTML = inputValueNumber * flowering.Grow + ' მ/ლ '+' Tripart Grow ';
        resultmicro.innerHTML = inputValueNumber * flowering.Micro + ' მ/ლ '+' Tripart Micro ';
        resultbloom.innerHTML = inputValueNumber * flowering.Bloom + ' მ/ლ '+' Tripart Bloom ';
    }
}

