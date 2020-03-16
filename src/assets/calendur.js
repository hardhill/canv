class Calendur {
    curDate = new Date();
    year = 0
    month = 0
    //номер месяца 0-январь
    get GetMonth(){
        this.month = this.curDate.getMonth()
        return this.month
    }
    //год
    get GetFullYear(){
        this.year = this.curDate.getFullYear()
        return this.year
    }
    //дата первого дня месяца
    get GetFirstDayMonth(){
        return new Date(this.GetFullYear,this.GetMonth,1)
    }
    //дата последнего дня в месяце
    get GetLastDayMonth(){
        return new Date(this.GetFullYear,this.GetMonth,this.MaxDaysInMonth(this.year,this.month))
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
    //номер дня недели по-русски
    GetDayRus(nomday){
        return (nomday==0)?6:nomday-1
    }
    get MonthDays(){
        var arrDays = new Array()
        var dayofw1 = this.GetDayRus(this.GetFirstDayMonth.getDay())
        var dayofw2 = this.GetDayRus(this.GetLastDayMonth.getDay())
        var setFirst = new Date().setDate(this.GetFirstDayMonth - dayofw1)
        var setLast = new Date().setDate(this.GetLastDayMonth+(6-dayofw2)) 
        arrDays.push(setFirst)
        do{

        }while()
        return arrDays
    }
    constructor (date){
        this.curDate = date
    }
}

module.exports = Calendur