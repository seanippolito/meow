#!/usr/bin/env node
import meow from 'meow';
import foo from './lib/index.js';

const cli = meow(`
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`, {
	importMeta: import.meta, // This is required
	flags: {
		rainbow: {
			type: 'boolean',
			shortFlag: 'r'
		}
	}
});
/*
{
	input: ['unicorns'],
	flags: {rainbow: true},
	...
}
*/

console.log(cli.help)
foo(cli.input.at(0), cli.flags);