import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

export default function NotFound() {
  return (
    <div className="container not-found">
      <Eyebrow>Error 404 · index entry missing</Eyebrow>
      <h1>This route is not in the ledger.</h1>
      <p>The page may have moved, or the guide has not published it.</p>
      <div className="button-row">
        <Link className="button" href="/">Return home</Link>
        <Link className="button button--secondary" href="/apps/">Browse apps</Link>
      </div>
    </div>
  );
}
