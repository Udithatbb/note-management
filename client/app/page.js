import PreLoader from "./component/PreLoader";
import Home from "./dashboard/Home";

export default function page() {
  return (
    <>
      <PreLoader />
      <Home />
    </>
  );
}
