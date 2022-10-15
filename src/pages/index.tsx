export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center text-center pt-5">
      <h1 className="font-extrabold text-5xl">Great things are coming...</h1>
      <p className="mt-2 max-w-2xl">
        We're working really hard to help the{" "}
        <span className="text-yellow-300">stats community.</span> In the
        meantime, you can fill in the form below to get notified when we blast
        off.
      </p>
    </div>
  );
}
