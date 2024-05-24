// script.js
document.addEventListener('DOMContentLoaded', () => {
    const formulari = document.getElementById('formulari-contacte');
    
    formulari.addEventListener('submit', function(event) {
        event.preventDefault();

        const nom = document.getElementById('nom').value.trim();
        const correuElectronic = document.getElementById('correu-electronic').value.trim();
        const missatge = document.getElementById('missatge').value.trim();
        let errors = [];

        if (!nom) {
            errors.push('El nom és obligatori');
        }

        if (!correuElectronic || !validarCorreuElectronic(correuElectronic)) {
            errors.push('El correu electrònic no és vàlid');
        }

        if (!missatge) {
            errors.push('El missatge és obligatori');
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
        } else {
            alert('Formulari enviat correctament!');
            formulari.reset();
        }
    });

    function validarCorreuElectronic(correu) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(correu);
    }
});
