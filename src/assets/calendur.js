var moment = require('moment')

class Calendur {
    curDate = moment();
    year = 0
    month = 0
    //номер месяца 0-январь
    get GetMonth(){
        this.month = moment(this.curDate).month()
        return this.month
    }
    //год
    get GetFullYear(){
        this.year = moment(this.curDate).year()
        return this.year
    }
    //дата первого дня месяца
    get GetFirstDayMonth(){
        return moment([this.GetFullYear, this.GetMonth,1])
    }
    //дата последнего дня в месяце
    get GetLastDayMonth(){
        return moment(this.GetFirstDayMonth).endOf('month')
    }
    //сколько дней в месяце
    MaxDaysInMonth(y,m){
        if (m == 1) {
            return y%4 || (!(y%100) && y%400 ) ? 28 : 29;
        }
        return m===3 || m===5 || m===8 || m===10 ? 30 : 31;
    }
    //название месяца строкой
    get NameMonth(){
        var s = ''
        switch (this.GetMonth) {
            case 0:
                s = 'пьянварь'
                break
            case 1:
                s = 'фигвраль'
                break
            case 2:
                s = 'кошмарт'
                break
            case 3:
                s = 'сопрель'
                break
            case 4:
                s = 'сымай'
                break
            case 5:
                s = 'теплюнь'
                break
            case 6:
                s = 'жарюль'
                break
            case 7:
                s = 'авгрусть'
                break
            case 8:
                s = 'свистябрь'
                break
            case 9:
                s = 'мокрябрь'
                break
            case 10:
                s = 'гноябрь'
                break
            case 11:
                s = 'дубабрь'
                break
        }
        return s
    }
    get YearName(){
        return moment(this.curDate).year()
    }
    //номер дня недели по-русски
    GetDayRus(nomday){
        return (nomday==0)?6:nomday-1
    }
    get MonthDaysEx(){
        var arrDays = new Array()
        var dayofw1 = this.GetDayRus(this.GetFirstDayMonth.day())
        var dayofw2 = this.GetDayRus(this.GetLastDayMonth.day())
        var setFirst = this.GetFirstDayMonth.subtract(dayofw1,'d')
        var setLast = this.GetLastDayMonth.add((6-dayofw2),'d')
        var cDate = setFirst
        while(cDate<setLast){
            
            arrDays.push(moment(cDate))
            cDate=cDate.add(1,'d')
        }
        return arrDays
    }
    Back(){
        this.curDate = moment(this.curDate).subtract(1,'M')
    }
    Forward(){
        this.curDate = moment(this.curDate).add(1,'M')
    }
    get MonthDaysArr(){
        var arrDays = new Array()
        var arrWeek = new Array()
        this.MonthDaysEx.forEach((element) => {
            var el = {
                date:element.date(),
                wname: element.day(),
                dname: element.format('dd')
            }
            arrDays.push(el)
            
            if(el.wname==0){
                arrWeek.push(arrDays)
                arrDays = []
                
            }
        });
        return arrWeek
    }
    constructor (date){
        this.curDate = date
    }
}

module.exports = Calendur