import { HashLoader } from "react-spinners";

export default function SpinnerLoading({ loading }) {
  return (
    <div className="spinner-container">
      {loading && (
        <div className="loader">
          <HashLoader
            color={"#fcb900"}
            loading={loading}
            size={100}
            cssOverride={{ position: "absolute" }}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </div>
  );
}
