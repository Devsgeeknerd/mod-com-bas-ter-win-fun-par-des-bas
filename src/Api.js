const BASE_API = "https://api.b7web.com/devbarber/api";

export default {
  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const json = await req.json();
    return json;
  },
};
