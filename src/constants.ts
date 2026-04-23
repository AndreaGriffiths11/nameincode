export interface LetterInfo {
  language: string;
  code: string;
  colorClass: string;
  info: string;
}

export const LETTER_MAPPINGS: Record<string, LetterInfo> = {
  A: {
    language: '.py',
    code: 'class A:\n  def __init__():\n    pass',
    colorClass: 'text-primary-fixed',
    info: 'Language: Python\nStructure: Class Def',
  },
  B: {
    language: '.c',
    code: 'char B;\nwhile(B)\n  break;',
    colorClass: 'text-syntax-cyan',
    info: 'Language: C\nStructure: While Loop',
  },
  C: {
    language: '.cpp',
    code: 'case C:\n  return 0;\nbreak;',
    colorClass: 'text-syntax-purple',
    info: 'Language: C++\nStructure: Switch Case',
  },
  D: {
    language: '.go',
    code: 'func D() error {\n  defer db.Close()\n}',
    colorClass: 'text-syntax-purple',
    info: 'Language: Go\nStructure: Defer Statement',
  },
  E: {
    language: '.css',
    code: '.e-class {\n  display: flex;\n}',
    colorClass: 'text-syntax-cyan',
    info: 'Language: CSS\nStructure: Flex Rule',
  },
  F: {
    language: '.rs',
    code: 'fn F<T>() {\n  for f in F {}\n}',
    colorClass: 'text-syntax-pink',
    info: 'Language: Rust\nStructure: Generic Fun',
  },
  G: {
    language: '.sql',
    code: 'GROUP BY\n  G.id\nHAVING count(*)',
    colorClass: 'text-syntax-yellow',
    info: 'Language: SQL\nStructure: Aggregate',
  },
  H: {
    language: '.html',
    code: '<html>\n  <head>\n    {H}\n  </head>\n</html>',
    colorClass: 'text-syntax-orange',
    info: 'Language: HTML\nStructure: Main Doc',
  },
  I: {
    language: '.js',
    code: 'if (I) {\n  items.map(i => i)\n}',
    colorClass: 'text-syntax-pink',
    info: 'Language: JavaScript\nStructure: Conditional',
  },
  J: {
    language: '.json',
    code: '{\n  "job": "J",\n  "jump": true\n}',
    colorClass: 'text-syntax-cyan',
    info: 'Language: JSON\nStructure: Object',
  },
  K: {
    language: '.kt',
    code: 'val k = K::class\nrunBlocking {}',
    colorClass: 'text-syntax-purple',
    info: 'Language: Kotlin\nStructure: Reflection',
  },
  L: {
    language: '.lua',
    code: 'local L = {}\nfor l=1,10 do\nend',
    colorClass: 'text-syntax-yellow',
    info: 'Language: Lua\nStructure: Local Table',
  },
  M: {
    language: '.md',
    code: '# Main\n- item M\n- measure',
    colorClass: 'text-secondary',
    info: 'Language: Markdown\nStructure: List',
  },
  N: {
    language: '.js',
    code: 'const n = () => {\n  return null;\n}',
    colorClass: 'text-syntax-pink',
    info: 'Language: JavaScript\nStructure: Arrow Fn',
  },
  O: {
    language: '.objc',
    code: '@interface O\n[obj set:O];\n@end',
    colorClass: 'text-syntax-cyan',
    info: 'Language: Obj-C\nStructure: Protocol',
  },
  P: {
    language: '.php',
    code: 'public function P()\n{\n  parent::P();\n}',
    colorClass: 'text-syntax-purple',
    info: 'Language: PHP\nStructure: Inheritance',
  },
  Q: {
    language: '.gql',
    code: 'query Q($id: ID!) {\n  user(id: $id) { q }\n}',
    colorClass: 'text-syntax-pink',
    info: 'Language: GraphQL\nStructure: Query',
  },
  R: {
    language: '.rs',
    code: 'fn r_macro!() {\n  loop {}\n}',
    colorClass: 'text-syntax-yellow',
    info: 'Language: Rust\nStructure: Macro Loop',
  },
  S: {
    language: '.swift',
    code: 'struct S {\n  static var s = S()\n}',
    colorClass: 'text-syntax-orange',
    info: 'Language: Swift\nStructure: Singleton',
  },
  T: {
    language: '.ts',
    code: 'type T<U> = {\n  [K in keyof U]: T\n}',
    colorClass: 'text-syntax-cyan',
    info: 'Language: TypeScript\nStructure: Mapped Type',
  },
  U: {
    language: '.sh',
    code: 'until [ $U ]; do\n  echo "U"\ndone',
    colorClass: 'text-primary-fixed',
    info: 'Language: Bash\nStructure: Until Loop',
  },
  V: {
    language: '.v',
    code: 'module V\nassign V = v_in;\nendmodule',
    colorClass: 'text-syntax-purple',
    info: 'Language: Verilog\nStructure: Module',
  },
  W: {
    language: '.wasm',
    code: '(module\n  (func $W (result i32)\n    i32.const 1))',
    colorClass: 'text-syntax-pink',
    info: 'Language: WebAssembly\nStructure: S-Expr',
  },
  X: {
    language: '.xml',
    code: '<xml>\n  <x-attr val="X" />\n</xml>',
    colorClass: 'text-syntax-orange',
    info: 'Language: XML\nStructure: Tag',
  },
  Y: {
    language: '.yml',
    code: 'yaml_y:\n  version: Y\n  env: production',
    colorClass: 'text-syntax-cyan',
    info: 'Language: YAML\nStructure: Config',
  },
  Z: {
    language: '.zig',
    code: 'const z = @import("Z");\npub fn main() !void {}',
    colorClass: 'text-syntax-yellow',
    info: 'Language: Zig\nStructure: Main Entry',
  },
  ' ': {
    language: '.txt',
    code: '\n  /* SPACE */\n',
    colorClass: 'text-on-surface-variant',
    info: 'White Space',
  }
};
