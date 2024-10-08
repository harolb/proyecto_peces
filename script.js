document.addEventListener('DOMContentLoaded', function() {
    fetch('/datos')
    .then(response => response.json())
    .then(datos => {
        mostrarDatos(datos);
        crearGrafico(datos);
    });

    function mostrarDatos(datos) {
        const contenedor = document.getElementById('contenedor-datos');
        datos.forEach(dato => {
            const div = document.createElement('div');
            div.textContent = `Oxígeno: ${dato.oxigeno}, Temperatura: ${dato.temperatura}, CO2: ${dato.dioxido_carbono}`;
            contenedor.appendChild(div);
        });
    }

    function crearGrafico(datos) {
        const ctx = document.getElementById('grafico-barra').getContext('2d');
        const labels = datos.map(dato => `Pecera ${dato.id}`);
        const oxigeno = datos.map(dato => dato.oxigeno);
        const temperatura = datos.map(dato => dato.temperatura);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Oxígeno',
                        data: oxigeno,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Temperatura',
                        data: temperatura,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
