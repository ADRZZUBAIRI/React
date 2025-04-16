import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  return <h3>Welcome, User #{id}</h3>;
}
