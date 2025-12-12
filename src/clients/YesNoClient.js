import axios from "axios";

const consumirAPI = async () => {
    const respuesta = await axios.get('https://yesno.wtf/api').then(r => r.data);
    console.log(respuesta);
    return await respuesta;
}

export async function consumirAPIFacade(){
    return await consumirAPI();
}