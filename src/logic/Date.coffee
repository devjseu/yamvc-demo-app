app = window.app || {}
app.logic = app.logic || {}
yamvc = window.yamvc

DateHelper = yamvc.Core.extend(
  (all...)->
    yamvc.Core.apply(@, all)
    @
)

DateHelper::daysInMonth = (month,year)->
  new Date(year, month, 0).getDate()

DateHelper::daysAgo = (from, days)->
  new Date(+new Date(from) - days*24*60*60*1000)

DateHelper::parse = (str)->
  pad = (x)->
    ((('' + x).length == 2) ? '': '0') + x
  m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  d = if (m) then new Date(m[3], m[2] - 1, m[1]) else null
  matchesPadded = (d && (str == [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')))
  matchesNonPadded = (d && (str == [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/')))
  if (matchesPadded || matchesNonPadded) then d else null



app.logic.Date = new DateHelper
window.app = app