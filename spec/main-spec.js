const main = require('../main/main');

describe('main()', () => {  
    it('should return 910', () => {
        let actual = main("910");
        expect(actual).toBe(
            "._. ... ._.\n"+
            "|_| ..| |.|\n"+
            "..| ..| |_|\n");
    });
    

    it('should return 256', () => {
        let actual = main("256");
        expect(actual).toBe(
            "._. ._. ._.\n"+
            "._| |_. |_.\n"+
            "|_. ._| |_|\n");
    });


    it('should return 7', () => {
        let actual = main("7");
        expect(actual).toBe(
            "._.\n"+
            "..|\n"+
            "..|\n");
    });

    //判断字库是否有问题
    it('should return 9876543210', () => {
        let actual = main("9876543210");
        expect(actual).toBe(
            "._. ._. ._. ._. ._. ... ._. ._. ... ._.\n"+
            "|_| |_| ..| |_. |_. |_| ._| ._| ..| |.|\n"+
            "..| |_| ..| |_| ._| ..| ._| |_. ..| |_|\n");
    });

    //输入非法的情况
    it('should return error', () => {
        let actual = main("3.12");
        expect(actual).toBe(undefined);
    });

    it('should return error', () => {
        let actual = main("-2");
        expect(actual).toBe(undefined);
    });

    it('should return error', () => {
        let actual = main("1@4");
        expect(actual).toBe(undefined);
    });

    it('should return error', () => {
        let actual = main("4abc");
        expect(actual).toBe(undefined);
    });

});