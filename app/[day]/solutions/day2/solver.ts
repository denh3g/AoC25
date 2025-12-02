export async function solveDay2(input: string): Promise<{ partA: number; partB: number }> {
    let partA = 0;
    let partB = 0;

    const ids = input.split(',');

    ids.forEach(id => {
        id = id.split('-');
        for (let i = 0; i < id.length; i++){
            const validID = validateIDs(id[i]);

            validID ? partA++ : console.log('not a valid ID');
        }
    })

    console.log('partA: ',partA);

    return { partA, partB };
}

interface IDValidator {
    (id: string): boolean;
}

const validateIDs: IDValidator = (id: string): boolean => {
    console.log(id);
    return true;
}