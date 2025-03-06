#!/usr/bin/env node

function foo(cli, flag) {
    if (flag.rainbow) {
        console.log(`Hello 🌈 ${cli} 🌈`)
    } else {
        console.log(cli);
    }
};
/*
{
	input: ['unicorns'],
	flags: {rainbow: true},
	...
}
*/
export default foo;
// foo(cli.input.at(0), cli.flags);