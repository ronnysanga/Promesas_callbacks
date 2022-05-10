const heroes = {

    capi: {
        nombre: "Cap Am",
        poder: "Inyecciones"
    },
    iron : {
        nombre: "Iroman",
        poder: "dinero"
    },
    Spider: {
        nombre: "Peter",
        poder: "Picar arañas"
    },
}

export const buscarHeroe = ( id, callback )=>{

    const heroe = heroes[id];
    if (heroe){
        callback(null, heroe); 
    }else{
        callback(`No existe un heroe con el id ${id}`);
    }
    

};