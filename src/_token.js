function token(type=0, value=null, hint=null) {
  return {type, value, hint};
};
const TYPE = {
  NONE: 0x00|0,
  TEXT: 0x10|0,
  NORMAL: 0x11|0,
  QUOTED: 0x12|0,
  NUMBER: 0x20|0,
  CARDINAL: 0x21|0,
  ORDINAL: 0x22|0,
  UNIT: 0x30|0,
  MASS: 0x31|0,
  ENTITY: 0x40|0,
  TABLE: 0x41|0,
  COLUMN: 0x42|0,
  ROW: 0x43|0,
  BRACKET: 0x50|0,
  OPEN: 0x51|0,
  CLOSE: 0x52|0,
  SEPARATOR: 0x60|0,
  OPERATOR: 0x70|0,
  UNARY: 0x71|0,
  BINARY: 0x72|0,
  TERNARY: 0x73|0,
  FUNCTION: 0x80|0,
  KEYWORD: 0x90|0,
  EXPRESSION: 0xA0|0,
  VALUE: 0xA1|0,
  BOOLEAN: 0xA2|0,
};
const T = TYPE;

function parse(txt) {
  var quo = null, y = '', z = [];
  for(var c of txt) {
    if((quo!=null && quo!=c) || /\w/.test(c)) { y += c; continue; }
    if(y) { z.push(token(quo!=null? T.QUOTED:T.TEXT, y)); y = ''; }
    if(/[\'\"\`]/.test(c)) quo = quo==null? c:null;
    else if(/\S/g.test(c)) z.push(token(T.TEXT, c));
  }
  if(y) z.push(token(quo!=null? T.QUOTED:T.TEXT, y));
  return z;
};

function toString(tkns) {
  var z = '';
  for(var tkn of tkns)
    z += tkn.value+' ';
  return z.trim();
};

token.type = TYPE;
token.parse = parse;
token.toString = toString;
module.exports = token;
