## eval cal example in Node.js and mineflayer API
- 完整碼
```javascript
function cal(quote="2x(3+10)"){ //quote 輸入的字串
  strToArray=[] //先宣告主陣列
  scan="" //先宣告文字儲存器
  for(singleWord of quote){ //掃描每個單字
    sw=singleWord //縮寫
    //if遇到符號
    if(sw=="+"||sw=="-"||sw=="x"||sw=="/"||sw=="("||sw==")"){
      if(scan){ //if文字儲存器有文字
        strToArray.push(scan) //推上去前面存的文字(數字)
      }
      if(sw=="x"){sw="*"} //x要轉成eval看得懂的*
      strToArray.push(sw) //推上去現在遇到的符號
      scan="" //還原文字儲存器
    }else{
      scan+=sw  
    }
  }
  return eval(strToArray.join(" "))
}
console.log(cal())
console.log(eval("2 * ( 3 + 10 )"))
``` 
### 講解前提
`eval("12 + 18")=30`

eval()將正確格式的數學式子

從字串 `"12 + 18"` 轉成數字 `12+18`

結構為 `eval("數字 符號 數字")=數字`

eval會辨識之間的空格來區別 __`數字`__ 與 __`符號`__

為了方便，目標是從輸入沒空格的字串 `"2x(3+10)"`

將字串轉為 `"2 * ( 3 + 10 )"`

最後由 `eval()`轉成 __數字結果__

<br></br>
### 由上而下的流程簡圖
```python
"2x(3+10)"  # 遊戲裡打的字串

["2", "x", "(", "3", "+", "10", ")"]  # 數字和符號拆開

["2", "*", "(", "3", "+", "10", ")"]  # x要轉成eval看得懂的*

"2 * ( 3 + 10 )"  # 合併陣列並製造空格

eval("2 * ( 3 + 10 )")  # 輸入到eval()得到最後數字

26
```
