const url = "http://localhost:3000";

export const getPosts = async () => {
  try {
    const res = await fetch(`${url}/input`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getInfo = async (dataForm) => {
  try {
    const res = await fetch(`${url}/input`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(dataForm),
    });
  } catch (error) {
    return error.message;
  }
};

export const getId = async (deleteItemId) => {
  try {
    const res = await fetch(`${url}/input/${deleteItemId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
