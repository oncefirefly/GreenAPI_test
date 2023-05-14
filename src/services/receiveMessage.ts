export const receiveMessage = (idInstance: string, apiTokenInstance: string) =>
  fetch(
    `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
