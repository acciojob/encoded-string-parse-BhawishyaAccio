const parseCode = (str) => {
  // your code here
	let ans=str.split("000");
let obj={
  firstName:ans[0],
  lastName:ans[1],
  id:ans[2]
}
return obj
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
