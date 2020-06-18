    //  global var
     var progressBar= document.getElementById('progress-color');
     var progressCounter = 0;

    //  name progress
    var progressName = document.querySelector('#name');
    var name_Check = document.getElementById('name-checkbox');
    let nameValProgress = [0];

    progressName.addEventListener("change",function(){
        if(progressName.value.length > 0 && nameValProgress[0] < 20){
			progressCounter += 20;
			nameValProgress[0] += 20;
            progressBar.classList.add('p' + progressCounter);
		  	name_Check.checked = true;
		}
		else if(progressName.value.length < 1 ){
			clearProgress();
			progressCounter -= 20;
			nameValProgress[0] -= 20
            progressBar.classList.add('p'+progressCounter);
		  	name_Check.checked = false;
		}
    })

    // for Email
    var progressEmail = document.querySelector("#email");
    var email_Check = document.getElementById('email-checkbox');
    let emailValProgress = [0];
    progressEmail.addEventListener("change",function(){
        if(progressEmail.value.length > 0 && emailValProgress[0] < 20){
			progressCounter += 20;
			emailValProgress[0] += 20;
            progressBar.classList.add('p' + progressCounter);
            email_Check.checked = true;
		}
		else if(progressEmail.value.length < 1 ){
			clearProgress();
			progressCounter -= 20;
			emailValProgress[0] -= 20
            progressBar.classList.add('p'+progressCounter);
            email_Check.checked = false;
		}
    })
    var progressPhone = document.querySelector("#phone");
    var phone_checkbox = document.getElementById('phone-checkbox');
    let phoneValProgress = [0];
    progressPhone.addEventListener("change",function(){
        if(progressPhone.value.length > 0 && phoneValProgress[0]  < 20){
			progressCounter += 20;
			phoneValProgress[0] += 20;
            progressBar.classList.add('p' + progressCounter);
            phone_checkbox.checked = true;
		}
		else if(progressPhone.value.length < 1 ){
			clearProgress();
			progressCounter -= 20;
			phoneValProgress[0] -= 20
            progressBar.classList.add('p'+progressCounter);
            phone_checkbox.checked = false;
		}
    })
    //     For website
    var progressWebsite = document.querySelector("#website");
    var website_checkbox = document.getElementById('website-checkbox');
    let webValProgress = [0];
    progressWebsite.addEventListener("change",function(){
        if(progressWebsite.value.length > 0 && webValProgress[0]  < 20){
			progressCounter += 20;
			webValProgress[0] += 20;
            progressBar.classList.add('p' + progressCounter);
            website_checkbox.checked = true;
		}
		else if(progressWebsite.value.length < 1 ){
			clearProgress();
			progressCounter -= 20;
			webValProgress[0]  -= 20
            progressBar.classList.add('p'+progressCounter);
            website_checkbox.checked = false;
		}
    })
    
    var progressNote = document.querySelector("#notes");
    var note_checkbox = document.querySelector("notes-checkbox");
    let notesValProgress = [0];
    progressNote.addEventListener("change",function(){
        if( progressNote.value.length > 0 &&  notesValProgress[0]  < 20){
			progressCounter += 20;
            notesValProgress[0] += 20;
            progressBar.classList.add('p' + progressCounter);
            note_checkbox.checked = true;
		}
		else if( progressNote.value.length < 1 ){
			clearProgress();
			progressCounter -= 20;
            notesValProgress[0]  -= 20
            progressBar.classList.add('p'+progressCounter);
            note_checkbox.checked = false;
		}
    })
	function clearProgress(){
		let progressBar = document.querySelector('#progress-color');
		progressBar.classList.remove('p20', 'p40', 'p60', 'p80', 'p100');
	}
