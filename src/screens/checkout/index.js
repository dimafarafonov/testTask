import { useLocation } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  return <>{JSON.stringify(state, null, 2)}</>;
};

export default Checkout;
