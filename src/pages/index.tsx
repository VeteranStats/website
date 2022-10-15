import Document from "../components/Document";

export default function Home() {
  return (
    <>
      <Document title="Coming Soon" />
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="font-extrabold text-5xl">Great things are coming...</h1>
        <p className="mt-2 max-w-xl">
          We&apos;re working really hard to help the{" "}
          <span className="text-yellow-300">stats community.</span> Make sure to
          keep your eyes pealed on what we will work on in the future.
        </p>
      </div>
    </>
  );
}
