import axios from "axios";

export const verifyToken = async (token) => {
    try {
        await axios.post("http://127.0.0.1:8000/user/api/token/verify/",
            {
                token: token
            }).catch(function (error) {
                localStorage.clear()
                console.log(error)
            })
    }
    catch (error) {
        console.log(error)
    }
}