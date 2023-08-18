import Request from "../utils/request";

import env from "../env";

const request = new Request(env.api.baseUrl);

const getContent = async () => {
  const data = await request.get(env.api.content);
  console.log("data:", data);
  return data;
};

export default {
  getContent
};
