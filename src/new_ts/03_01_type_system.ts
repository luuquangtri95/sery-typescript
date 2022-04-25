// type system

/**
 * type system overview
 * type alias vs interface
 * function
 * enum
 * generics
 * utility type
 * ...vv
 */

// todo: 1 type system overview

/**
 * primitive: number, boolean, null, undefined, symbol
 * reference: array, object, function
 */

// literal type => dùng chủ yếu cho const

let count2: 1; // let count2:number
let channelName: "easy"; // let channelName:string
let isActive3: false; // let isActive3:boolean
let student: null;

const COUNTDOWN = 1; // const COUNTDOWN:1
const CHANNEL_NAME = "easy"; //const CHANNEL_NAME:"easy"

// freeze 1 object, array tương tự nhau

const studentClass = {
  id: 1, // id:number
  name: "tri", //name:string
};

const studentClassFreeze = {
  id: 1, // readonly id:number
  name: "tri", //readonly name:string
} as const;

// type assertion

function getStatusName(state: "active") {
  console.log(state);
}

// const s = "active"; // literal type
// getStatusName(s);

let s = "active";
getStatusName(s as "active");
