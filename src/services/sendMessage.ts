import { SendMessageRequestBody } from "../utils/types";

// POST https://api.green-api.com/waInstance{{idInstance}}/SendMessage/{{apiTokenInstance}}

export const sendMessage = (
  idInstance: string,
  apiTokenInstance: string,
  body: SendMessageRequestBody
) =>
  fetch(
    `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
