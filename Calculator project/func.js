const display = document.getElementById('display');
const historyContent = document.getElementById('historycontent');
let isDegree = true;

document.addEventListener('DOMContentLoaded', () => {
    const savedHistory = JSON.parse(localStorage.getItem('calcHistory')) || [];
    savedHistory.forEach(item => {
        renderHistoryItem(item.eqn, item.res, false);
    });
});

function add(val) { 
    display.value += val; 
}

function clearDisplay() { 
    display.value = ''; 
}

function backspace() { 
    display.value = display.value.slice(0, -1); 
}

function togglePanel(id) { 
    document.getElementById(id).classList.toggle('active'); 
}

function toggleTheme() { 
    document.body.classList.toggle('light-mode'); 
}

function toggleDeg() {
    isDegree = !isDegree;
    document.getElementById('degbtn').innerText = isDegree ? "Deg" : "Rad";
}

function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

function calculate() {
    try {
        let input = display.value;
        if (!input) return;

        let formula = input
            .replace(/π/g, 'Math.PI')
            .replace(/e/g, 'Math.E')
            .replace(/√\(/g, 'Math.sqrt(')
            .replace(/\^/g, '**')
            .replace(/ln\(/g, 'Math.log(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/(\d+)%/g, '($1/100)')
            .replace(/(\d+)!/g, 'factorial($1)')

        if (isDegree) {
            formula = formula.replace(/sin\(([^)]+)\)/g, 'Math.sin(($1)*Math.PI/180)');
            formula = formula.replace(/cos\(([^)]+)\)/g, 'Math.cos(($1)*Math.PI/180)');
            formula = formula.replace(/tan\(([^)]+)\)/g, 'Math.tan(($1)*Math.PI/180)');
        }

        let result = eval(formula);
        
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(8));
        }

        renderHistoryItem(input, result, true);
        display.value = result;
    } catch (e) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}


function renderHistoryItem(eqn, res, shouldSave) {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `<small style="opacity:0.7">${eqn}</small><br><strong>= ${res}</strong>`;
    div.onclick = () => display.value = res;
    historyContent.prepend(div);

    if (shouldSave) {
        const history = JSON.parse(localStorage.getItem('calcHistory')) || [];
        history.push({ eqn, res });
        localStorage.setItem('calcHistory', JSON.stringify(history));
    }
}

function clearHistory() { 
    historyContent.innerHTML = ''; 
    localStorage.removeItem('calcHistory');
}