'use strict';

module.exports = {
    setJsonBodyWithRandomUser
};

// faker util
const faker = require('faker');

/**
 * Generate random user for POST http requesst
 * @param requestParams 
 * @param context 
 * @param ee 
 * @param next 
 */
function setJsonBodyWithRandomUser(requestParams, context, ee, next) {
    // generate data with faker
    const username = faker.internet.userName();
    const email = faker.internet.exampleEmail();

    // add fake data to the json payload 
    requestParams.json = {
        username,
        email
    };

    // add variables to virtual user's context:
    context.vars.newUsername = username;
    context.vars.newEmail = email;

    return next(); // MUST be called for the scenario to continue
}
