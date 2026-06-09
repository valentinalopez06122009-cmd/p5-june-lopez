import ConfettiButton from "@/components/confettiButton";
import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}> BIBBLE ARE BOSs</h1>

      <div className="my-20">
        <span className="text-2xl mr-6">WOW bibble is so cool !</span>{" "}
        <span className="text-xs"> i know .</span>
      </div>

      <div className="flex gap-4">
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
        <ConfettiButton />
      </div>
    </div>
  );
}
