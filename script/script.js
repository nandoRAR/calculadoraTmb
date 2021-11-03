const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = getNumber('age');
    const weight = getNumber('weight');
    const height = getNumber('height');
    const activity = getNumber('activity_level');
    const gender = getString('gender');

    const tmb = (
        gender === 'male'
            ? (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
            : (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
    );

    const same = Math.round(tmb * activity);
    const lostWeight = same - 450;
    const gainWeight = same + 450;

    const result = `<p>Aqui está o resultado:</p>
    <div class="result-content">
        <ul>
            <li>Seu metabolismo basal é de <span>${Math.round(tmb)} calorias</span></li>
            <li>Para manter o seu peso você precisa consumir em média <span>${same} calorias</span></li>
            <li>Para perder peso você precisa consumir em média <span>${lostWeight} calorias</span></li>
            <li>Para ganhar peso você precisa consumir em média <span>${gainWeight} calorias</span></li>
        </ul>
    </div>`

    document.getElementById("result").innerHTML = result;
})

function getNumber(id) {
    return Number(document.getElementById(id).value);
}

function getString(id) {
    return document.getElementById(id).value;
}