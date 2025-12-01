export default function Answer({ a }) { 
 return <p>{a ? `The answer is: ${a}` : "puzzle incomplete"}</p>
}