/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var caql = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,11],$V2=[2,37],$V3=[1,14],$V4=[1,26],$V5=[1,19],$V6=[1,25],$V7=[5,44],$V8=[5,18,44],$V9=[5,14,18,44],$Va=[1,33],$Vb=[1,34],$Vc=[1,35],$Vd=[5,21,23,26,44],$Ve=[1,37],$Vf=[1,38],$Vg=[1,39],$Vh=[5,14];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"select_statement":4,"EOF":5,"SELECT":6,"fields":7,"where_optional":8,"orderby_optional":9,"where_clause":10,"column_list":11,"*":12,"column_field":13,",":14,"NAME":15,"AS":16,"column":17,"WHERE":18,"filter":19,"conjunction":20,"AND":21,"disjunction":22,"OR":23,"predicate":24,"(":25,")":26,"comparison_predicate":27,"contains_predicate":28,"location_predicate":29,"like_predicate":30,"COMPARISON":31,"literal":32,"NOT":33,"CONTAINS":34,"STRING":35,"PARAM":36,"LIKE":37,"WITHIN":38,"location":39,"NUMBER":40,"OF":41,"coordinates":42,"orderby_clause":43,"ORDERBY":44,"sort_list":45,"sort_expression":46,"direction":47,"ASC":48,"DESC":49,"boolean":50,"TRUE":51,"FALSE":52,"NULL":53,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"SELECT",12:"*",14:",",15:"NAME",16:"AS",18:"WHERE",21:"AND",23:"OR",25:"(",26:")",31:"COMPARISON",33:"NOT",34:"CONTAINS",35:"STRING",36:"PARAM",37:"LIKE",38:"WITHIN",40:"NUMBER",41:"OF",44:"ORDERBY",48:"ASC",49:"DESC",51:"TRUE",52:"FALSE",53:"NULL"},
productions_: [0,[3,2],[4,4],[4,2],[7,1],[7,1],[11,1],[11,3],[13,1],[13,3],[17,1],[8,0],[8,1],[10,2],[20,3],[22,3],[19,1],[19,1],[19,1],[19,3],[24,1],[24,1],[24,1],[24,1],[27,3],[27,2],[28,3],[28,3],[28,2],[30,3],[30,3],[30,4],[30,4],[29,3],[29,2],[39,3],[42,3],[9,0],[9,1],[43,2],[45,1],[45,3],[46,2],[47,0],[47,1],[47,1],[50,1],[50,1],[32,1],[32,1],[32,1],[32,1],[32,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return $$[$0-1]; 
break;
case 2:
 this.$ = new yy.SelectStatementNode($$[$0-2], $$[$0-1], $$[$0]); 
break;
case 3:
 this.$ = new yy.SelectStatementNode(new yy.FieldListNode('*'), $$[$0-1], $$[$0]); 
break;
case 5:
 this.$ = new yy.FieldListNode(new yy.ColumnNode('*')); 
break;
case 6:
 this.$ = new yy.FieldListNode($$[$0]); 
break;
case 7: case 41:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 8:
 this.$ = new yy.ColumnNode($$[$0]) 
break;
case 9:
 this.$ = new yy.ColumnNode($$[$0-2], $$[$0]) 
break;
case 13:
 this.$ = new yy.FilterNode($$[$0]); 
break;
case 14:
 this.$ = new yy.ConjunctionNode($$[$0-2], $$[$0]); 
break;
case 15:
 this.$ = new yy.DisjunctionNode($$[$0-2], $$[$0]); 
break;
case 19:
 this.$ = $$[$0-1] 
break;
case 24:
 this.$ = new yy.ComparisonPredicateNode($$[$0-2], $$[$0-1], $$[$0]); 
break;
case 25: case 28: case 34:
 this.$ = $$[$0].negate(); 
break;
case 26: case 27:
 this.$ = new yy.ContainsPredicateNode($$[$0-2], $$[$0]); 
break;
case 29: case 30:
 this.$ = new yy.LikePredicateNode($$[$0-2], $$[$0]); 
break;
case 31: case 32:
 this.$ = new yy.LikePredicateNode($$[$0-3], $$[$0]).negate(); 
break;
case 33:
 this.$ = new yy.LocationPredicateNode($$[$0-2], $$[$0]); 
break;
case 35:
 this.$ = new yy.LocationNode($$[$0-2], $$[$0]); 
break;
case 36:
 this.$ = new yy.CoordinatesNode($$[$0-2], $$[$0]); 
break;
case 39:
 this.$ = new yy.OrderByNode($$[$0]); 
break;
case 40:
 this.$ = new yy.SortListNode($$[$0]); 
break;
case 42:
 this.$ = new yy.SortNode($$[$0-1], $$[$0]); 
break;
}
},
table: [{3:1,4:2,6:[1,3],10:4,18:$V0},{1:[3]},{5:[1,6]},{7:7,11:8,12:[1,9],13:10,15:$V1},{5:$V2,9:12,43:13,44:$V3},{15:$V4,17:24,19:15,20:17,22:18,24:16,25:$V5,27:20,28:21,29:22,30:23,33:$V6},{1:[2,1]},o($V7,[2,11],{8:27,10:28,18:$V0}),o($V8,[2,4],{14:[1,29]}),o($V8,[2,5]),o($V9,[2,6]),o($V9,[2,8],{16:[1,30]}),{5:[2,3]},{5:[2,38]},{15:$Va,45:31,46:32},o($V7,[2,13],{21:$Vb,23:$Vc}),o($Vd,[2,16]),o($Vd,[2,17]),o($Vd,[2,18]),{15:$V4,17:24,19:36,20:17,22:18,24:16,25:$V5,27:20,28:21,29:22,30:23,33:$V6},o($Vd,[2,20]),o($Vd,[2,21]),o($Vd,[2,22]),o($Vd,[2,23]),{31:$Ve,33:[1,41],34:$Vf,37:[1,40],38:$Vg},{15:$V4,17:45,27:42,28:43,29:44,33:$V6},o([31,33,34,37,38],[2,10]),{5:$V2,9:46,43:13,44:$V3},o($V7,[2,12]),{13:47,15:$V1},{15:[1,48]},{5:[2,39],14:[1,49]},o($Vh,[2,40]),o($Vh,[2,43],{47:50,48:[1,51],49:[1,52]}),{15:$V4,17:24,19:53,20:17,22:18,24:16,25:$V5,27:20,28:21,29:22,30:23,33:$V6},{15:$V4,17:24,19:54,20:17,22:18,24:16,25:$V5,27:20,28:21,29:22,30:23,33:$V6},{21:$Vb,23:$Vc,26:[1,55]},{32:56,35:[1,58],36:[1,59],40:[1,57],50:60,51:[1,62],52:[1,63],53:[1,61]},{35:[1,64],36:[1,65]},{39:66,40:[1,67]},{35:[1,68],36:[1,69]},{37:[1,70]},o($Vd,[2,25]),o($Vd,[2,28]),o($Vd,[2,34]),{31:$Ve,34:$Vf,38:$Vg},{5:[2,2]},o($V9,[2,7]),o($V9,[2,9]),{15:$Va,46:71},o($Vh,[2,42]),o($Vh,[2,44]),o($Vh,[2,45]),o($Vd,[2,14]),o([5,23,26,44],[2,15],{21:$Vb}),o($Vd,[2,19]),o($Vd,[2,24]),o($Vd,[2,48]),o($Vd,[2,49]),o($Vd,[2,50]),o($Vd,[2,51]),o($Vd,[2,52]),o($Vd,[2,46]),o($Vd,[2,47]),o($Vd,[2,26]),o($Vd,[2,27]),o($Vd,[2,33]),{41:[1,72]},o($Vd,[2,29]),o($Vd,[2,30]),{35:[1,73],36:[1,74]},o($Vh,[2,41]),{40:[1,76],42:75},o($Vd,[2,31]),o($Vd,[2,32]),o($Vd,[2,35]),{14:[1,77]},{40:[1,78]},o($Vd,[2,36])],
defaultActions: {6:[2,1],12:[2,3],13:[2,38],46:[2,2]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser () {
  this.yy = CaqlAst;
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
