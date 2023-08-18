import Request from "../utils/request";
import env from "../env";

const request = new Request(env.api.baseUrl);

const getContent = async () => await request.get(env.api.content);

const searchMean = async(word) => await request.get(env.api.search(word));

const searchWrite = async(word) => await request.get(env.api.write(word));

export default {
  getContent,
  searchMean,
  searchWrite
};
