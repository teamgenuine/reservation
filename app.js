const room_a = [];
const room_b = [];
const room_c = [];

var date_a = new Date(2018, 11, 11, 9, 0);
var date_b = new Date(2018, 11, 11, 10, 0);
var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

document.getElementById("btnSubmit").addEventListener('click', function() {
    let nameOfPerson = document.getElementById('name').value;
    let numberOfPeople = document.getElementById('numberOfPeople').value;
    let durationTime = (parseInt(document.getElementById("duration_hours").value) * 60) + parseInt(document.getElementById("duration_minutes").value);
    let projectorNeed = document.getElementById('projector').value === "yes" ? true : false;
    let whiteboardNeed = document.getElementById('whiteboard').value === "yes" ? true : false;

    let checkD = checkDuration(durationTime);
    let checkN = checkName(nameOfPerson);
    let checkNum = checkNumberOfPeople(numberOfPeople);
    let checkUtil = checkUtilities(projectorNeed, whiteboardNeed, numberOfPeople);

    if (checkD && checkN && checkNum && checkUtil) {
        document.getElementById("errorDuration").innerHTML = "";
        document.getElementById("errorName").innerHTML = "";
        document.getElementById("errorNumber").innerHTML = "";
        document.getElementById("errorUtil").innerHTML = "";

        let info = {
            name: nameOfPerson,
            number_of_people: numberOfPeople,
            duration: durationTime,
            projector_need: projectorNeed,
            whiteboard_need: whiteboardNeed,
        }
        
        let room = selectRoom(info.number_of_people);
        let reserved = reserveTheRoom(room, info);

        document.getElementById('div_success').innerHTML = reserved;
        console.log(room_a);
        console.log(room_b);
        console.log(room_c);
    } else {
        document.getElementById("errorDuration").innerHTML = errorMessages.duration;
        document.getElementById("errorName").innerHTML = errorMessages.name;
        document.getElementById("errorNumber").innerHTML = errorMessages.number_of_people;
        document.getElementById("errorUtil").innerHTML = errorMessages.utilities;
        document.getElementById('div_success').innerHTML = "";
    }
});

function selectRoom(number_of_people) {
    if (number_of_people <= 4 ) {
        return 'a';
    }
    if (number_of_people <= 6) {
        return 'b';
    }
    if (number_of_people > 6) {
        return 'c';
    }
}

function reserveTheRoom(room, info) {
    switch(room){
        case 'a':
            if (room_a.length < 1) {
                let start = new Date(date_a);
                room_a.push({
                    name: info.name,
                    number_of_people: info.number_of_people,
                    start_time_of_use: start,
                    duration: info.duration,
                    projector_need: info.projectorNeed,
                    whiteboard_need: info.whiteboard_need,
                });
                return start.getDate()+ " " + monthNames[start.getMonth()] + " " + start.getFullYear() + " " + "Room A";
            } else {
                let prevReseve = room_a[room_a.length - 1];
                let prevDur = prevReseve.duration + 15;
                let prevStartTime = new Date(prevReseve.start_time_of_use);
                
                let startTime = new Date(prevStartTime.setMinutes(prevDur));
        
                room_a.push({
                    name: info.name,
                    number_of_people: info.number_of_people,
                    start_time_of_use: startTime,
                    duration: info.duration,
                    whiteboard_need: info.whiteboard_need,
                    projector_need: info.projectorNeed,
                });
                return startTime.getDate()+ " " + monthNames[startTime.getMonth()] + " " + startTime.getFullYear() + " " + "Room A";
            }
        case 'b':
            if (room_b.length < 1) {
                let start = new Date(date_b);
                room_b.push({
                    name: info.name,
                    number_of_people: info.number_of_people,
                    start_time_of_use: start,
                    duration: info.duration,
                    whiteboard_need: info.whiteboard_need,
                    projector_need: info.projectorNeed,
                });
                return start.getDate()+ " " + monthNames[start.getMonth()] + " " + start.getFullYear() + " " + "Room B";
            } else {
                let prevReseve = room_b[room_b.length - 1];
                let prevDur = prevReseve.duration + 15;
                let prevStartTime = new Date(prevReseve.start_time_of_use);
                
                let startTime = new Date(prevStartTime.setMinutes(prevDur));

                room_b.push({
                    name: info.name,
                    number_of_people: info.number_of_people,
                    start_time_of_use: startTime,
                    duration: info.duration,
                    whiteboard_need: info.whiteboard_need,
                    projector_need: info.projectorNeed,
                });
                return startTime.getDate()+ " " + monthNames[startTime.getMonth()] + " " + startTime.getFullYear() + " " + "Room A";
            }
        case 'c':
            if (room_c.length < 1) {
                let start = new Date(date_b);
                room_c.push({
                    name: info.name,
                    number_of_people: info.number_of_people,
                    start_time_of_use: start,
                    duration: info.duration,
                    whiteboard_need: info.whiteboard_need,
                });
                return start.getDate()+ " " + monthNames[start.getMonth()] + " " + start.getFullYear() + " " + "Room C";
            } else {
                let prevReseve = room_c[room_c.length - 1];
                let prevDur = prevReseve.duration + 15;
                let prevStartTime = new Date(prevReseve.start_time_of_use);
                
                let startTime = new Date(prevStartTime.setMinutes(prevDur));

                room_c.push({
                    name: info.name,
                    number_of_people: info.number_of_people,
                    start_time_of_use: startTime,
                    duration: info.duration,
                    whiteboard_need: info.whiteboard_need,
                    projector_need: info.projectorNeed,
                });
                return startTime.getDate()+ " " + monthNames[startTime.getMonth()] + " " + startTime.getFullYear() + " " + "Room C";
            }
    }
}