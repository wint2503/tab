var gettablinks = document.querySelectorAll('.tablinks');//NodeList
var getbtncloses = document.getElementsByClassName('btn-close');//HTML Collection
var gettabpanes = document.getElementsByClassName('tab-pane');//HTML Collection

var tabpanes = Array.from(gettabpanes);

function gettab(evn,linkid){
    // ----> another coding way <---- for loop is ok for HTML Collection
    // for(var x = 0; x < gettabpanes.length; x++){
    //     gettabpanes[x].style.display='none';
    // }

    // If u use foreach, u need to change array form.
    tabpanes.forEach(function(tabpane){
        tabpane.style.display = 'none';
    })

    for(var x = 0; x < gettablinks.length; x++){
        gettablinks[x].className = gettablinks[x].className.replace(" active","");

        getbtncloses[x].addEventListener('click',function(){
            // document.getElementById(linkid).style.display='none';
            this.parentElement.style.display='none';
        })
    }

    document.getElementById(linkid).style.display='block';

    // evn.target.className += " active";
    // evn.target.className = evn.target.className.replace("tablinks","tablinks active");
    // evn.target.classList.add("active");

    // console.log(evn)
    // console.log(evn.target);
    // console.log(evn.currentTarget);
    evn.currentTarget.className += " active";

}

document.getElementById('autoclick').click();



