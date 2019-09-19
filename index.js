const _ = {};

_.map = function(list, callback){
  let storage = [];
  if(Array.isArray(list)){
     let length = list.length;
    for(let i = 0; i < length; i++){
    storage.push(callback(list[i], i, list))
    };
  
   }
   else{
     for(let keys in list){
       storage.push(callback(list[keys], keys, list))
     }
   }
  return storage;
}

// Example
let obj = {name: "sky", roll: 51};
let arr = [1,2,3];
let callback = function(value, index, list){
  return value
};
let test = _.map(obj, callback);
console.log(test);   //logs ['sky', 51]
