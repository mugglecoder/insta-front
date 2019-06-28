import ApolloClient, {
  createErrorLink,
  createRequestLink,
  InMemoryCache
} from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  link: ApolloLink.from([
    createErrorLink(),
    createRequestLink(handleRequest),
    createUploadLink({ uri: "http://localhost:4000" })
  ]),
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
