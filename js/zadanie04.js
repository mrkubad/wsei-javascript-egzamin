// Podpunkt 1
const sampleClassElements = document.querySelectorAll('.sample_class');

const getTagsOfElements = elements => {
    let result = [];
    for(element of elements) {
        result.push(element.tagName);
    }

    return result;
}

getTagsOfElements(sampleClassElements);

// Podpunkt 2
const sampleIdElement = document.querySelector('#sample_id');
const getClassesOfElement = element => element.classList.value.split(' ');
getClassesOfElement(sampleIdElement);

// Podpunkt 3
const listElements = document.querySelectorAll('.sample_class_2  li');
const getInnerTextsOfElements = elements => {
    let result = [];
    for(element of elements) {
        result.push(element.innerText);
    }

    return result;
}
getInnerTextsOfElements(listElements);

// Podpunkt 4
const allLinks = document.querySelectorAll('a');
const getAddressesOfElements = elements => {
    let result = [];
    for(element of elements) {
        result.push(element.href);
    }
    return result;
}
getAddressesOfElements(allLinks);
// Podpunkt 5
document.querySelectorAll('.sample_class_3').forEach( element => {
    getTagsOfElements(element.children);
});
