export const deleteNotification = (
  idInstance: string,
  apiTokenInstance: string,
  messageId: string
) =>
  fetch(
    `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${messageId}`
  );
