//Search User

const github = new GitHub;

const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    //get text which is being typed in
    const userText = e.target.value;

    if (userText != '') {

        //make http call
        github.getUser(userText)
        .then((data)=>{
            //console.log(data);
            if (data.profile.message === 'Not Found') {
                //show alert
                ui.showAlert('User Not Found','alert alert-danger');
                
            }
            else{
                //show profile
                ui.showProfile(data.profile);
            }
        })
        
    }
    else{
        //clear profile
        ui.clearProfile();
    }
});