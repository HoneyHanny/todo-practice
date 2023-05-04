var pushFunction =  function push() {
	if (document.querySelector('#newtask input').value.length == 0) {
		alert("Kindly Enter Task Name!!!")
	} else {
		document.querySelector('#tasks').innerHTML += `
			<div class="task">
				<span id "taskname">
					${document.querySelector('#newtask input').value}
				</span>
				<button class="delete">
					<i>
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-http-delete" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <path d="M3 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z"></path>
						   <path d="M14 8h-4v8h4"></path>
						   <path d="M10 12h2.5"></path>
						   <path d="M17 8v8h4"></path>
						</svg>
					</i>
				</button>
			</div>
		`;
		
		var current_tasks = document.querySelectorAll(".delete");
		for (var i = 0; i < current_tasks.length; i++) {
			current_tasks[i].onclick = function() {
				this.parentNode.remove();
			}
		}
	}
}

document.querySelector('#push').onclick = pushFunction
document.addEventListener('keydown', function() {
	if (event.key != "Enter")
		return;
	pushFunction()
})
