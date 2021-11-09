## eval cal example in Node.js
- 說明用程式碼
```javascript
function cal(quote){ //quote 輸入的字串
  strToArray=[] //先宣告主陣列
  scan="" //先宣告數字儲存器(字串形式)
  for(singleWord of quote){ //掃描每個單字
    sw=singleWord //縮寫
    //if遇到符號, else遇到數字就...
    if(sw=="+"||sw=="-"||sw=="x"||sw=="/"||sw=="("||sw==")"){
      if(scan){ //if數字儲存器有文字
        strToArray.push(scan) //推上去前面存的數字
      }
      if(sw=="x"){sw="*"} //x要轉成eval看得懂的*
      strToArray.push(sw) //推上去現在遇到的符號
      scan="" //還原數字儲存器, 準備儲存新的數字
    }else{  //else遇到數字
      scan+=sw  //數字儲存器從後面加上新的單字
    }
  }
  //迴圈結束, 主陣列做好了
  Str=strToArray.join(" ")  //主陣列每個元素之間插入一個空格" "
  return eval(Str) //cal() 主函式回傳最後數字
}
console.log(cal("2x(3+10)"))  //列印cal(輸入的字串)
console.log(eval("2 * ( 3 + 10 )")) //^兩個結果一樣
``` 
### 前提
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
<br></br>
### 乾淨程式碼
- 思考空間
```javascript
function cal(quote){
  strToArray=[]
  scan=""
  for(singleWord of quote){
    sw=singleWord
    if(sw=="+"||sw=="-"||sw=="x"||sw=="/"||sw=="("||sw==")"){
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
  Str=strToArray.join(" ")
  return eval(Str)
}
console.log(cal("2x(3+10)"))
console.log(eval("2 * ( 3 + 10 )"))
```
<br></br>
### 變數表
```rust
cal(string) => number 26 答案
quote => string "2x(3+10)" 輸入字串
strToArray => array 主陣列
scan => string 數字儲存器
singleWord / sw => string 單字
Str => string 加入空格後的字串
```
```javascript
陣列.push(元素) -> 在陣列後面加上元素
陣列.join(字串) -> 在陣列中每個元素之間插入字串並回傳新字串
eval(特定格式字串) -> 四則運算後回傳數字
```
<br></br>
### 結構
```rust
function{
  for(){
    if(){
    
    }else{
    
    }
  }
  return
}
```
