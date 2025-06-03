import Image from "next/image";
import MemberList from "./MemberList.client";

export default function ZustandPage() {
  return (
    <main className="flex flex-col h-[calc(100vh-var(--header-height))]">
      <h1>Zustand</h1>
      <MemberList />
    </main>
  );
}
