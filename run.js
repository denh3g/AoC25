import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runDay(day, useSample = false) {
  try {
    // Import the solver for the specified day
    const solverPath = `./app/[day]/solutions/day${day}/solver.js`;
    const { [`solveDay${day}`]: solver } = await import(solverPath);
    
    // Read the input or sample file
    const filename = useSample ? 'sample.txt' : 'input.txt';
    const inputPath = join(__dirname, `app/[day]/solutions/day${day}/${filename}`);
    const input = readFileSync(inputPath, 'utf-8').trim();
    
    const fileLabel = useSample ? '📝 Sample' : '📄 Input';
    console.log(`\n🎄 Day ${day} Solution (${fileLabel}) 🎄`);
    console.log('='.repeat(40));
    
    // Run the solver
    const result = await solver(input);
    
    console.log('\n✨ Results:');
    console.log(`Part A: ${result.partA}`);
    console.log(`Part B: ${result.partB}`);
    console.log('='.repeat(40) + '\n');
    
  } catch (error) {
    console.error(`\n❌ Error running day ${day}:`, error.message);
    if (error.code === 'ENOENT') {
      console.error(`Make sure day${day} solver and input files exist.\n`);
    }
  }
}

async function runAll(useSample = false) {
  const fileLabel = useSample ? 'Sample Files' : 'Input Files';
  console.log(`\n🎄 Running All Advent of Code Solutions (${fileLabel}) 🎄\n`);
  
  for (let day = 1; day <= 25; day++) {
    await runDay(day, useSample);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const useSample = process.env.SAMPLE === '1';

if (args.length === 0) {
  console.log('\nUsage:');
  console.log('  npm run solve <day>     - Run a specific day (1-25) with input.txt');
  console.log('  npm run sample <day>    - Run a specific day with sample.txt');
  console.log('  npm run solve all       - Run all days with input.txt');
  console.log('  npm run sample all      - Run all days with sample.txt');
  console.log('\nExamples:');
  console.log('  npm run solve 1');
  console.log('  npm run sample 5');
  console.log('  npm run solve all\n');
} else if (args[0] === 'all') {
  await runAll(useSample);
} else {
  const day = parseInt(args[0]);
  if (isNaN(day) || day < 1 || day > 25) {
    console.error('❌ Please provide a valid day number (1-25) or "all"\n');
  } else {
    await runDay(day, useSample);
  }
}
