// Write your solution in this file!
let driver = {name: 'sam', address: '11 Broadway'} 
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver,{ [key]: value})
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
driver[key] = '12 Broadway'
return driver
}
function deleteFromDriverByKey(driver, name){
let newDriver = Object.assign({},driver);
    delete newDriver.name;
    return newDriver;}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver.name;
    return driver
}
    