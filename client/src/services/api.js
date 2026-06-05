const BASE_URL = "http://localhost:3000/api"

export const signUpUser = async (data) => {
    const res = await fetch(`${BASE_URL}/signup`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )
    return res.json();
    console.log(data);
}