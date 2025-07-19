import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            image="/assets/placeholder-property.jpg"
            title="Sample Property"
            description="This is a placeholder property description."
          >
            <Button label="Book Now" />
          </Card>
        </div>
      </main>
    </>
  );
}
