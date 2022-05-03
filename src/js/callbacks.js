const heroes = {

    capi: {
        nombre: "Cap Am",
        poder: "Inyecciones"
    },
    iron : {
        nombre: "Iroman",
        poder: "dinero"
    },
    capi: {
        nombre: "Cap Am",
        poder: "Inyecciones"
    },
    Spider: {
        nombre: "Peter",
        poder: "Picar arañas"
    }
}

export const buscarHeroe = ( id, callback )=>{

    const heroe = heroes(id);

    callback( heroe ); 

};