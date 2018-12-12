
var errorMessages = {
    name: '',
    number_of_people: '',
    duration: '',
    utilities: '',
};


function checkDuration(durationTime) {
    if (durationTime >= 30 && durationTime <= 120 ){
        errorMessages.duration = "";
        return true;
    } else {
        errorMessages.duration = "Minimum duration is 30 minutes and maximum duration is 2 hours";
        return false;
    }
}

function checkName(nameOfPerson) {
    if (nameOfPerson === "") {
        errorMessages.name = "Invalid Input";
        return false;
    } else {
        errorMessages.name = "";
        return true;
    }
}

function checkNumberOfPeople(numberOfPeople) {
    if (numberOfPeople == "") {
        errorMessages.number_of_people = "Invalid input";
        return false;
    } else if (numberOfPeople <= 0) {
        errorMessages.number_of_people = "Invalid input";
        return false;
    } else {
        errorMessages.number_of_people = "";
        return true;
    }
}

function checkUtilities(projector, whiteboard, number_of_people) {
    let room = selectRoom(number_of_people);

    switch(room) {
        case 'a':
            if (whiteboard) {
                errorMessages.utilities = "The available Room C does not provide Whiteboard";
                return false;
            } else {
                errorMessages.utilities = "";
                return true;
            }
        case 'b':
            if (projector) {
                errorMessages.utilities = "The avaiable Room B does not provide Projector";
                return false;
            } else {
                errorMessages.utilities = "";
                return true;
            }
        case 'c':
            if (projector) {
                errorMessages.utilities = "The avaiable Room C does not provide Projector";
                return false;
            } else {
                errorMessages.utilities = "";
                return true;
            }
    }
}
