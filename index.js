function cal(quote){
  strToArray=[]
  scan=""
  for(singleWord of quote){
    sw=singleWord
    if("+-x/()".includes(sw)){
      if(scan){
        strToArray.push(scan)
      }
      if(sw=="x"){sw="*"}
      strToArray.push(sw)
      scan=""
    }else{
      scan+=sw
    }
  }
  final=strToArray[strToArray.length-1]
  if("+-*/()".includes(final)){
      strToArray.push(scan)
  }
  Str=strToArray.join(" ")
  return eval(Str)
}
console.log(cal("2x(3+10)"))
console.log(eval("2 * ( 3 + 10 )"))
//module.exports = cal 模組化 可忽略
