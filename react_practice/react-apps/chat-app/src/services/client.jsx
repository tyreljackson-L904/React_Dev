import stream from "getstream";

//instantiate a new client (server side)
const client = stream.connect(
  process.env.STREAM_API_KEY,
  process.env.STREAM_CLIENT_SECRET
);

export default client;
