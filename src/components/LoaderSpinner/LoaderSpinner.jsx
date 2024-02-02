import { InfinitySpin } from "react-loader-spinner";
import { SpinnerWrapper } from "./LoaderSpinnerStyle";

const LoaderSpinner = () => {
  return (
    <SpinnerWrapper>
      <InfinitySpin
        visible={true}
        width="200"
        color="#207293"
        ariaLabel="infinity-spin-loading"
      />
    </SpinnerWrapper>
  );
};

export default LoaderSpinner;
