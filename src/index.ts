import './examples/arrays';
import './examples/types-vs-interfaces';

const project = "it's TypeScript project";

export function app(who: string = project): string {
  console.log(`Hello ${who}! `);

  return `Hello ${who}! `;
}

app();
