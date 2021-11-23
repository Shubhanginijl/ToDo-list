document.querySelector('#add').onclick = function(){

    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">

                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="fas fa-trash-alt"></i> 
                </button>
                <a><i class="far fa-edit"></i><a>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        
    //     var task=document.querySelectorAll(".tasks");
    //      for(var i=0;i<tasks.length;i++){
    //          task[i].onclick=function(){
    //              this.classList.toggle('completed')
    //          }
    // }
}
}