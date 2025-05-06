export default function WavyBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: "linear-gradient(to bottom, #f0fbff 0%, #ffffff 100%)",
      }}
    />
  );
}
