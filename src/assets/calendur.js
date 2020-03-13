class Calendur {
    curDate = new Date();
    year = 0
    month = 0
    
    get GetMonth(){
        this.month = this.curDate.getMonth()
        return this.month
    }

    get GetFullYear(){
        this.year = this.curDate.getFullYear()
        return this.year
    }

    get GetFirstDayMonth(){
        return new Date(this.GetFullYear,this.GetMonth,1)
    }

    get GetLastDayMonth(){
        return new Date(this.GetFullYear,this.GetMonth,MaxDays(this.year,this.month))
    }

    MaxDays(y,m){
        if (m == 1) {
            return y%4 || (!(y%100) && y%400 ) ? 28 : 29;
        }
        return m===3 || m===5 || m===8 || m===10 ? 30 : 31;
    }
    get NameMonth(){
        var s = ''
        switch (this.month) {
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
    constructor (date){
        this.curDate = date
    }
}

module.exports = Calendur