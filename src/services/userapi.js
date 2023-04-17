import axios from "axios";

export async function signUp(body){
    const response = await axios.post("http://localhost:4000/user",body);
    return response.data;
}

export async function signIn(body){
    const response = await axios.put("http://localhost:4000/user/signin",body);
    return response.data;
}