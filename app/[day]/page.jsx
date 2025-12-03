/* eslint-disable react/prop-types */
import React from "react";
import Answer from "../components/Answer";
import getInput from "../components/Input";
import DayLayout from "../components/DayLayout";
import { notFound } from "next/navigation";
import getDays from "../components/getDays";

// Dynamically import solver
async function getSolver(day) {
    try {
        const solution = await import(`./solutions/${day}/solver`);
        const solverName = `solve${day.charAt(0).toUpperCase()}${day.slice(1)}`;
        return solution[solverName] || null;
    } catch {
        return null;
    }
}

export default async function DayPage({ params }) {
    const { day } = await params;
    
    const availableDays = await getDays();
    
    // Check if the day exists
    if (!availableDays.includes(day)) {
        notFound();
    }

    const solver = await getSolver(day);
    if (!solver) {
        notFound();
    }

    const input = await getInput({ path: `[day]/solutions/${day}/input.txt` });
    const { partA, partB } = await solver(input);

    return (
        <DayLayout day={`${day.charAt(0).toUpperCase() + day.slice(1)} Page`}>
            Part1: <Answer a={partA} />
            Part2: <Answer a={partB} />
        </DayLayout>
    );
}

// Generate static params for all available days
export async function generateStaticParams() {
    const days = await getDays();
    return days.map((day) => ({
        day,
    }));
}
