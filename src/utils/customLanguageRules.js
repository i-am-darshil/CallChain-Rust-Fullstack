// customLanguageRules.js
export const customLanguageRules = [
  [/#.*/, 'comment'],
  [/\b(BEGIN|END|SELECT|USE|BEGIN|END|SET|DEPENDS)\b/, 'keyword'],
  [/\b(CHAIN|METHOD|PROPERTIES|METHOD_PARAMS|PARAM|WITH|IS|AS|VALUE|TASK)\b/, 'property'],
  [/"[^"]*"/, 'string'],
  [/'[^']*'/, 'string'],
  [/\b0x[a-fA-F0-9]+\b/, 'hexblock'],
  // [/\b[0-9]+\b/, 'number'],

];

export const customTheme = {
  base: 'vs-dark', // Base theme
  inherit: false, // Do not inherit from base theme
  rules: [
    { token: 'comment', foreground: '#6272A4', fontStyle: 'italic' }, // Customize comment style
    { token: 'keyword', foreground: '#FF79C6', fontStyle: 'bold' }, // Customize keyword style
    { token: 'property', foreground: '#BD93F9' }, // Customize property style
    { token: 'string', foreground: '#50FA7B', fontStyle: 'bold' }, // Customize string style
    { token: 'number', foreground: '#F1FA8C' }, // Customize number style
  ],
  colors: {
    'editor.background': '#1E1E2E', // Background color
    'editor.foreground': '#D9D9D9', // Text color
    'editorLineNumber.foreground': '#6272A4', // Line number color
    'editorCursor.foreground': '#FF79C6', // Cursor color
    'editor.selectionBackground': '#44475A', // Selection color
    'editor.lineHighlightBackground': '#282A36', // Line highlight color
  },
};

// export const customTheme = {
//   base: 'vs-dark', // Base theme (you can use 'vs', 'vs-dark', or 'hc-black')
//   inherit: false, // Do not inherit from base theme
//   rules: [
//     { token: 'comment', foreground: '#6a737d', fontStyle: 'italic' }, // Customize comment style
//     { token: 'keyword', foreground: '#c678dd', fontStyle: 'bold' }, // Customize keyword style
//     { token: 'property', foreground: '#56B6C2' }, // Customize property style
//     { token: 'string', foreground: '#98C379', fontStyle: 'bold' }, // Customize string style
//     { token: 'number', foreground: '#D19A66' }, // Customize number style
//     { token: 'hexblock', foreground: '#4CAF50' }, // Customize number style
//   ],
//   colors: {
//     'editor.background': '#0D1117', // Background color similar to Dobri Next midnight
//     'editor.foreground': '#D9DBE9', // Text color
//     'editorLineNumber.foreground': '#6A737D', // Line number color
//     'editorCursor.foreground': '#C9D1D9', // Cursor color
//     'editor.selectionBackground': '#1F6FEB', // Selection color
//     'editor.lineHighlightBackground': '#161B22', // Line highlight color
//   },
// };

