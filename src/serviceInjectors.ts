import Api from "./services/api"
const serverUrl =  process.env.serverAddress|| "http://localhost:3000"
const api = new Api(serverUrl)

export default  api;