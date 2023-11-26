import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { prisma } from "@/lib/prismaConfig";

async function getData() {
  const result = await prisma.team.findMany({});
  return result;
}
export default async function TeamList() {
  const teams = await getData();
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {teams.map((person, i) => (
        <TeamMemberCard key={person.id} person={person} />
      ))}
    </ul>
  );
}
