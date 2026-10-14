export function checkParentheses(s:string):boolean{
if (s.length % 2 !== 0) {
    return false;
  }    

const stack: string[] = [];
const bracketsMap: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

for (const char of s) {
    if (char in bracketsMap) {
    
      const topElement = stack.pop();
      if (topElement !== bracketsMap[char]) {
        return false;
      }
    } else {
    
      stack.push(char);
    }
  }

  return stack.length === 0;

}