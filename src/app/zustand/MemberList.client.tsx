"use client";

import { log } from "console";
import { useCallback, useEffect, useState } from "react";

type TMember = {
  id: string;
  name: string;
  age: number;
  email: string;
};

export default function MemberList() {
  const [members, setMembers] = useState<TMember[]>([]);

  useEffect(() => {
    console.log("useEffect");
    async function fetchMembers() {
      const response = await fetch("/api/member", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          // "custom-error-status": "true",
          // "time-out-value" : '3000'
        }),
      });

      try {
        const { data } = await response.json();
        setMembers(data?.members || []);
      } catch (e) {
        console.log(e);
      }
    }
    fetchMembers();
  }, []);

  return (
    <div>
      <h2>Member List :: {members.length}</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}
