export const createPostService = (post, fnExito) => {
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
            gol_equipo1: 2,
            gol_equipo2: 2,
            codigo_partido: {
                codigo: 1
            }
        }),
        headers:{
            'Content-type':'application/json'
        }
    };

    fetch('http://192.168.100.9:8080/inventarios2/rest/tiposdocumento/agregar', config)
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