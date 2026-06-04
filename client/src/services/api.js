const BASE_URL = "http://localhost:3000/api"

export const signUpUser = async (data) => {
    const res = await fetch(`${BASE_URL}/signup`)
    return res.json();
}