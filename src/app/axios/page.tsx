"use client";

import { useEffect } from "react";

export default function AxiosPage() {
  useEffect(() => {
    console.log("useEffect");
    async function fetchMembers() {
      const response = await fetch("/api/memberDetail/3", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          // "custom-error-status": "true",
          // "time-out-value" : '3000'
        }),
      });

      try {
        const { data } = await response.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchMembers();
  }, []);

  return (
    <main className="flex h-[calc(100vh-var(--header-height))]">
      <h1>Axios</h1>
      <button onClick={()=>{
        fetch("/api/memberDetail/3", {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
            // "custom-error-status": "true",
            // "time-out-value" : '3000'
          }),
          body: JSON.stringify({
            name: "아무개",
          }),
        }).then((res)=>{
          console.log(res);
        }).catch((e)=>{
          console.log(e);
        });
      }}> 1번 회원 이름 아무개로 업데이트하기</button>
      </main>
  );
}
