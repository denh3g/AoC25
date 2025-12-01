import { promises as fs } from "fs";
import path from "path";

export default async function getDays() {
    const directory = path.join(process.cwd(), "app/[day]/solutions");
    const days = await fs.readdir(directory, { withFileTypes: true});

    return days
        .filter((day) => day.isDirectory() && day.name.startsWith("day"))
        .map((day) => day.name);
};