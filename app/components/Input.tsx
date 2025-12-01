import {promises as fs} from 'fs';

export default async function getInput({path}: {path: string}) {
    const input = await fs.readFile(process.cwd() + `/app/${path}`, 'utf8')
    return input;
}