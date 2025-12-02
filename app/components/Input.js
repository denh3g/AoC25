import {promises as fs} from 'fs';

export default async function getInput({path}) {
    const input = await fs.readFile(process.cwd() + `/app/${path}`, 'utf8')
    return input;
}