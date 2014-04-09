var data = data || {}
data.functions = data.functions || {}
data.seconds = 0

data.functions.startTimer = function() {

	data.timer = setInterval(updateTimer, 1000)

}

data.functions.resetTimer = function() {

	clearInterval(data.timer)
	data.seconds = 0
	updateDOM()

}

function updateTimer() {
	data.seconds++
	updateDOM()
}

function updateDOM() {
	document.getElementById('seconds').innerText = data.seconds < 10 ? '0' + data.seconds : data.seconds
}