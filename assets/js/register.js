const doctor_btn = document.querySelector("#doctor");
const patient_btn = document.querySelector("#patient");
const agent_btn = document.querySelector("#agent");
const doctor = document.querySelector("#Doctor");
const patient = document.querySelector("#Patient");
const agent = document.querySelector("#Agent");
const submit = document.querySelector("#submit");

var _type = 0;

const doc =()=>{
    doctor.style="display:block !important";
    patient.style="display:none !important";
    agent.style="display:none !important";
    _type = 0;
}

const pat =()=>{
    doctor.style="display:none !important";
    patient.style="display:block !important";
    agent.style="display:none !important";
    _type = 1;
}

const ajn =()=>{
    doctor.style="display:none";
    patient.style="display:none";
    agent.style="display:block";
    _type = 2;
}

doctor_btn.addEventListener("click",doc);
patient_btn.addEventListener("click",pat);
agent_btn.addEventListener("click",ajn);


const add = ()=>{
    if(_type===0){
        console.log(account,$("#Doctor-name").val(),"1234",$("#Doctor-dep").val(),$("#Doctor-pos").val(),$("#Doctor-sex").val(),$("#Doctor-age").val(),);
        contract.methods.register_doctor(account,$("#Doctor-name").val(),"1234",$("#Doctor-dep").val(),$("#Doctor-pos").val(),$("#Doctor-sex").val(),$("#Doctor-age").val()).send({from: account }, function (err, result) {
            if (err) {
                console.log("An error occured", err);
                return;
            }
            console.log("Doctor registered");
        });
    }
    else if(_type===1){
        console.log(account,$("#Patient-name").val(),"1234",$("#Patient-sex").val(),$("#Patient-age").val(),$("#Patient-dob").val());
        contract.methods.register_patient(account,$("#Patient-name").val(),"1234",$("#Patient-sex").val(),$("#Patient-age").val(),$("#Patient-dob").val()).send({from: account }, function (err, result) {
            if (err) {
                console.log("An error occured", err);
                return;
            }
            console.log("Patient registered");
        });
    }
    else{
        console.log(account,$("#Agent-name").val(),"1234",$("#Agent-sex").val(),$("#Agent-age").val(),$("#Agent-loc").val(),$("#Agent-agency").val());
        contract.methods.register_agent(account,$("#Agent-name").val(),"1234",$("#Agent-sex").val(),$("#Agent-age").val(),$("#Agent-loc").val(),$("#Agent-agency").val()).send({from: account }, function (err, result) {
            if (err) {
                console.log("An error occured", err);
                return;
            }
            console.log("Agent registered");
        });
    }
}

submit.addEventListener("click",add);