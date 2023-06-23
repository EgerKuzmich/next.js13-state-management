import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/redux");

  return (
    <div className="flex flex-col grow px-6 py-3">
      <strong>Обзор новых менеджеров состояния для react экосистемы</strong>
    </div>
  );
}
