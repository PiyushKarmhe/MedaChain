// Solidity program to demonstrate
// how to create a contract
///@custom:dev-run-script file_path
//SPDX-License-Identifier: GPT-3
pragma solidity >=0.8.4;

contract Mycontract{

    uint256 public peopleCount = 0;
    uint256 public DoctorCount = 0;
    uint256 public PatientCount = 0;
    uint256 public AgentCount = 0;
    uint256 public PrepCount = 0;

    string[] public patient_urls;
    string public verified;
 
    mapping(uint256 => People) public people;
    mapping(uint256 => Doctor) public doctor;
    mapping(uint256 => Patient) public patient;
    mapping(uint256 => Agent) public agent;
    mapping(uint256 => Prep_Rec) public prep_rec;

    struct People {
        address acc;
        string _type;
        string password;
    }

    struct Doctor {
        address acc;
        string name;
        string password;
        string dep;
        string position;
        string sex;
        string age;
    }

    struct Patient {
        address acc;
        string name;
        string password;
        string sex;
        string age;
        string dob;
    }

    struct Agent {
        address acc;
        string name;
        string password;
        string sex;
        string age;
        string location;
        string agency_name;
    }

    struct Prep_Rec {
        address doc;
        address pat;
        string url;
    }

    function register_doctor (address _acc, string memory _name, string memory _password, string memory _dep, string memory _position, string memory _sex, string memory _age) public{
        doctor[DoctorCount] = Doctor(_acc, _name, _password, _dep, _position, _sex, _age);
        DoctorCount += 1;
        people[peopleCount] = People(_acc,"doctor",_password);
        peopleCount += 1;
    } 

    function register_patient (address _acc, string memory _name, string memory _password, string memory _sex, string memory _age, string memory _dob) public{
        patient[PatientCount] = Patient(_acc, _name, _password, _sex, _age, _dob);
        PatientCount += 1;
        people[peopleCount] = People(_acc,"patient",_password);
        peopleCount += 1;
    } 

    function register_agent (address _acc, string memory _name, string memory _password, string memory _sex, string memory _age, string memory _loaction, string memory _agency_name) public{
        agent[AgentCount] = Agent(_acc, _name, _password, _sex, _age, _loaction, _agency_name);
        AgentCount += 1;
        people[peopleCount] = People(_acc,"agent",_password);
        peopleCount += 1;
    } 

    function upload_prep (address _doc, address _pat, string memory _url) public{

        prep_rec[PrepCount].doc = _doc;
        prep_rec[PrepCount].pat = _pat;
        prep_rec[PrepCount].url = _url;
        PrepCount += 1;
    }

    function download_prep (address _pat) public {
        uint256 i;
        uint256 j = 0;
        patient_urls = new string[](0);
        for(i=0; i<PrepCount ;i++){
            if(prep_rec[i].pat == _pat){
                patient_urls.push(prep_rec[i].url);
                j = 1;
            }
        }
        if(j==0){
            patient_urls = ["Not Found!!"];            
        }
    }

    function Is_present(address _acc) public view returns(bool){
        uint256 i;
        for(i=0; i<peopleCount; i++){
            if(people[i].acc == _acc){
                return true;
            }
        }

        return false;
    }

    function log_in(address _acc, string memory _password) public view returns(string memory){
        uint256 i;
        for(i=0; i<peopleCount; i++){
            if(people[i].acc == _acc){
                if(keccak256(abi.encodePacked(people[i].password)) == keccak256(abi.encodePacked(_password))){
                    return people[i]._type;
                }
                else{
                    return "false";
                }
            }
        }
        return "false";
    }

    function verify (address _pat, string memory _url) public{
        uint256 i;
        uint256 j = 0;
        patient_urls = new string[](0);
        for(i=0; i<PrepCount ;i++){
            if(prep_rec[i].pat == _pat){
                patient_urls.push(prep_rec[i].url);
                j = 1;
            }
        }

        if(j==0){
            patient_urls = ["Not Found!!"]; 
            verified = "false";           
        }

        for(i=0; i<patient_urls.length; i++){
            if(keccak256(abi.encodePacked(patient_urls[i])) == keccak256(abi.encodePacked(_url))){
                verified = "true";
                return;
            }
        }

        verified = "false2";
    }

    function person_type (address acc) public view returns(string memory){
        uint256 j;
        for(j=0; j<peopleCount; j++){
            if(people[j].acc == acc){
                return people[j]._type;
            }
        }
        return "false";
    }

    function urls_return() public view returns(string[] memory){
        return patient_urls;
    }

    function verified_return() public view returns(string memory){
        return verified;
    }
}