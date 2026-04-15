import "./Overlay.scss";

export function Overlay({ children, onClick }) {
  return (
    <div
      className="overlay flexCenterCenter "
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClick?.(e);
        }
      }}
    >
      {children}
    </div>
  );
}
