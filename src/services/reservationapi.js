import axios from "axios";

export async function postBooking(body,config){
    const response = await axios.post("http://localhost:4000/booking/reservation",body,config);
    return response.data;
}
