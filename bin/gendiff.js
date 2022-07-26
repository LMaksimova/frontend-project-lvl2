#!/usr/bin/env node
import { Command } from 'commander';
import generateDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(generateDiff(filepath1, filepath2));
  });
program.parse(process.argv);
