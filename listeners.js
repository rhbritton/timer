var data = data || {}
data.functions = data.functions || {}
data.seconds = 0

document.getElementById('start').addEventListener('click', data.functions.startTimer)
document.getElementById('reset').addEventListener('click', data.functions.resetTimer)