import axios from "axios";

export const verifyToken = async (token) => {
    try {
        const data = await axios.post("http://127.0.0.1:8000/user/api/token/verify/",
            {
                token: token
            }).then(function (data) {
                if (data.response.status === 401) {
                    localStorage.clear()
                    window.location.replace('http://localhost:3000/');
                }
                else {
                    return data.data
                }
            })
    }
    catch (error) {
        console.log(error)
    }
}