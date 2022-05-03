import { CleanPlugin } from "webpack";
import { buscarHeroe } from "./js/callbacks";
import "./styles.css";

const heroeId = "capi";

buscarHeroe(heroeId, (heroe)=>{

    console.log(heroe)

});