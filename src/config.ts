class Configuration {
  Production: Record<string, string> = {};
  Development: Record<string, string> = {};
}

export const Config = Object.assign(new Configuration(), {
  Production: {
    "Endpoint": "https://sotdl-rcg.herokuapp.com/api/v1"
  },
  Development: {
    "Endpoint": "http://localhost:8080/api/v1"
  }
});