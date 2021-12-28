// Write your solution in this file!
const driver = {
    name:  "Sam",
    address: "11 Broadway"
}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    // return driver[key] = value
    const newDrivers = Object.assign({}, driver);
    newDrivers[key] = value;
    return newDrivers
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value
    return driver
}

const deleteFromDriverByKey = (driver, key) => {
    const newCopyOfDrivers = Object.assign({}, driver)
    delete newCopyOfDrivers[key]
    return newCopyOfDrivers
}

const  destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
}

