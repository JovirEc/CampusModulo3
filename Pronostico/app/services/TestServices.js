export const createPostService = (equipos) => {
    const config={
        method:'POST',
        body:JSON.stringify({
        
            codigo_usuario: {
                cedula: "1723415418"
            },
            cod_equipo1: {
                codigo: "032"
            },
            cod_equipo2: {
                codigo: "591"
            },
            gol_equipo1: equipos.equipo1,
            gol_equipo2: equipos.equipo2,
            codigo_partido: {
                codigo: 4
            }
        }),
        headers:{
            'Content-type':'application/json'
        }
    };

    fetch('http://localhost:9091/inventarios-1.0.0/rest/pronostico/crear', config)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); 
        })
        .then((text) => {
            if (text) {
                return JSON.parse(text);  
            }
            throw new Error('Empty response');
        })
        .then((json) => {
            console.log("Respuesta del servidor:", json);
            fnExito();
        })
        .catch((error) => {
            fnExito();
            //console.error("Hubo un problema con la llamada fetch:", error);
        });
}