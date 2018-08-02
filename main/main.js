module.exports = function main(str) {
    //检测非法输入，str应该为0-9之间组合的数字
    var reg = /^[0-9]*$/;
    if(!reg.test(str))
    {
        console.error("Please check your input!\n");
        return;
    }
    let lcd_num = new Lcd_num(str);
    return lcd_num.print_Lcd().join("");
};
class Lcd_num{
    constructor(input){
        this.number = input;
        this.size = input.length;
    }
    //打印函数：将输入的字符串打印成Lcd
    print_Lcd(){
        var lcd = [];
        for(var row = 0; row < 3; row++ )
        {
            for(var i = 0; i < this.size ;i++)
          {
            lcd.push(Lcd_scr[this.number[i]][row]);
            (i == this.size-1)?lcd.push('\n'):lcd.push(' ');
          }
        }
        return lcd;
    }
};
//定义常量Lcd_scr存放lcd数字信息，不可更改
const Lcd_scr = {
    '0' : ['._.','|.|','|_|'],
    '1' : ['...','..|','..|'],
    '2' : ['._.','._|','|_.'],
    '3' : ['._.','._|','._|'],
    '4' : ['...','|_|','..|'],
    '5' : ['._.','|_.','._|'],
    '6' : ['._.','|_.','|_|'],
    '7' : ['._.','..|','..|'],
    '8' : ['._.','|_|','|_|'],
    '9' : ['._.','|_|','..|'],
};