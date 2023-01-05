const fs = require('node:fs');

async function stuff() {
  const fileContents = await fs.readFileSync('config.md');

  const lines = fileContents
    .toString()
    .split('|')
    .filter((line) => line !== '\n' && line !== '');

  let iter = 0;
  const fields = [];
  const tpl = `{
    attribute: '$ATTR',
    type: 'text',    
    required: false,
    label: '$LABEL',    
  },`;
  do {
    const attribute = lines[iter];
    const description = lines[iter + 1];

    fields.push(
      tpl.replace('$ATTR', attribute).replace('$LABEL', description).trim()
    );

    iter += 2;
  } while (iter < lines.length);

  fs.writeFileSync('/app/config---a.js', fields.join('\n'));
}
stuff();
