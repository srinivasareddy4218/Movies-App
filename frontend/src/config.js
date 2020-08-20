const FRONTEND_NAME = "frontend";
const BACKEND_NAME = "backend";

const getDomain = () => window.location.hostname.split(FRONTEND_NAME)[1];
const getProtocol = () => window.location.protocol;

const getBackend = () => getProtocol() + "//" + BACKEND_NAME + getDomain();

export const config = {
  baseURL: "http://mss1k8node3.eastus.cloudapp.azure.com:30379"
};
