function UserPrivilegeManagementSystem(person){

    privileges = (person.role == "admin")
            ? ((person.active == true && person.experience > 5 && person.department == "IT")
            ? "Full IT Admin Access"
            : (person.active == true && person.experience > 5 && person.department !== "IT") 
            ? "Full General Admin Access"
            : (person.active == true && person.experience <= 5)
            ? "Limited Admin Access"
            : "Admin Access Revoked")

            :(person.role == "manager")
            ? ((person.active == true && person.experience > 3 && person.department == "Sales")
             ? "Full Sales Manager Access"
             : (person.active==true && person.experience>3 && person.department != "Sales")
             ? "Full Manager Access"
             :(person.active==true && person.experience<=3 )
             ? "Limited Manager Access"
             : "Manager Access Revoked" )


             :( person.role == "user" )
             ? ( (person.active==true && person.department=="Support")
             ?  "Priority Support Access"     
             :  (person.active==true && person.department!="Support")
             ? "User Access"
             : "User Access Revoked"
             )
             :"Invalid Role"

             console.log(privileges)          

          
}
let person1 = { role: "admin", experience: 7, active: true, department: "IT" };
UserPrivilegeManagementSystem(person1)

let person2 = { role: "manager", experience: 4, active: true, department: "Marketing" };
UserPrivilegeManagementSystem(person2)

let person3 = { role: "user", experience: 2, active: true, department: "Support" };
UserPrivilegeManagementSystem(person3)

let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };
UserPrivilegeManagementSystem(person4)