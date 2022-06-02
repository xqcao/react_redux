// this from https://codesandbox.io/s/xgjrr?file=/src/components/codeblocks.js
const obj = {
  bash: `echo Simple Code`,
  c: `int main(void)
{
  puts("Simple Code!");
  return EXIT_SUCCESS;
}
`,
  clojure: `(defn hello []
  (println "Simple Code!"))
(hello)
`,
  cpp: `#include <iostream.h>
main() {
  cout << "Simple Code!" << endl;
  return 0;
}`,
  csharp: `class SimpleCode {
 static void Main() {
  System.Console.WriteLine("Hello, World!");
 }
}`,
  dart: `main() {
  print("Simple Code!");
}
`,
  elixir: `defmodule Greetings do
  def hello_world, do:
    hello("world" )


  defp  hello(recipient) do
  IO.puts(
  "hello #{recipient}"
  )
  end
end`,
  elm: `import Text
main = Text.plainText "Hello, world!"
`,
  erlang: `
-module(hello).
-export([hello/0]).
hello() ->
io:format("Simple Code!~n", []).
`,
  fsharp: `printf "Simple Code!\n"`,
  graphql: `query FirstSevenStarShips {
  allStarships(first: 7) {
    edges {
      node {
        id
        name
        model
        costInCredits
      }
    }
}
`,
  go: `package main
import "fmt"
func main() {
  fmt.Printf("Simple Code\n")
}
`,
  groovy: `println "Simple Code"`,
  haskell: `main = putStrLn "Simple Code"`,
  html: `<html>
<!-- Simple Code in HTML -->
<head>
<title>Simple Code!</title>
</head>
<body>
Simple Code!
</body>
</html>
`,
  java: `class SimpleCode {
  static public void main( String args[] ) {
    System.out.println( "Simple Code!" );
  }
}`,
  javascript: `var sys = require("sys");
sys.puts("Simple Code");
`,
  jsx: `class HelloMessage extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <button onClick={this.handlePress}>Say Hello</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />, 
  mountNode 
);`,
  julia: `println("Hello, World!")`,
  kotlin: `fun main(args : Array<String>) {
  println("Hello, world!")
}
`,
  lisp: `(defun hello-world()
"Display the string Simple Code."
  (interactive)
  (message "Simple Code"))
`,
  makefile: `all:
  @echo "Simple Code!"
`,
  matlab: `disp("Simple Code");`,
  objectivec: `#include <stdio.h>
#include <objpak.h>
int
main (int argc, char **argv)
{
  id set =[Set new];
  argv++;
  while (--argc)
  [set add: [String str:*argv++]];
  [set
   do
  :{
    :each | printf ("hello, %s!\n",[each str]);
   }
  ];
  return 0;
  }
`,
  ocaml: `print_string "Simple Code!\n";;`,
  php: `<?php
  echo "Simple Code!";
?>
`,
  python: `# Simple Code in Python 2
print "Simple Code"

# Simple Code in Python 3 (aka Python 3000)
print("Simple Code")
`,
  r: `cat("Simple Code\n")`,
  ruby: `puts "Simple Code!"`,
  rust: `fn main() {
  println!("Simple Code!");
}
`,
  scala: `object SimpleCode extends App {
  println("Simple Code!")
}
`,
  sql: `SELECT "Simple Code";`,
  swift: `println("Hello, world!")`,
  tsx: `import * as React from "react";

export class SimpleCode extends React.Component<any, any> {
    render() {
        return <div>Simple Code!It's from Helloword Component.</div>;
    }
}`,
  typescript: `var exclamation: string = "Hello";
var noun: string = "World";
console.log(exclamation + noun);
`,
};

export default obj;
