//Search User

const github = new GitHub;

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
                
            }
            else{
                //show profile
                
            }
        })
        
    }
});