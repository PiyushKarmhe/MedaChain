const login_signin = document.querySelector("#Dash_Board");

const signin = ()=>{
    contract.methods.Is_present(account).call({from: account }, function (err, res) {
        if (err) {
            console.log("An error occured", err)
            return
        }
        console.log(res);
        if(res==true){
            contract.methods.person_type(account).call({from: account }, function (err, _type) {
                if (err) {
                    console.log("An error occured", err);
                    return;
                }
                console.log(_type);
                if(_type === "doctor"){
                    window.location.href = `./doctor.html`;
                }
                else if(_type === "patient"){
                    window.location.href = `./patient.html`;
                }
                else{
                    window.location.href = `./agent.html`;
                }
            });
        }
        else{
            window.location.href = `./registration.html`;
        }
    });
};

login_signin.addEventListener("click",signin);