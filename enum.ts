// enum initialization
enum Environment{
    LOCAL,
    DEVELOPMENT,
    STAGING,
    PRODUCTION
}

//function for enum using switch
function runTests(env: Environment): void {
    switch(env){
        case Environment.LOCAL:
            console.log("Running tests on LOCAL environment...");
            break;

        case Environment.DEVELOPMENT:
            console.log("Running tests on DEVELOPMENT environment...");
            break;
        case Environment.STAGING:
            console.log("Running tests on STAGING environment...");
            break;

        case Environment.PRODUCTION:
            console.log("Running tests on PRODUCTION environment...");
            break;
        default:
            console.error("Invalid environment");
          
    }
}


//call the function using switch cases
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);