import "twin.macro";
import Nav from "../components/nav";
import { Button } from "@components/Button";

export default function Home() {
  return (
    <div>
      <Nav />
      <div tw="py-20">
        <h1 tw="text-5xl text-center text-electric">Next.js + Tailwind CSS</h1>
      </div>
      <Button>Demo</Button>
    </div>
  );
}
