/*******************************
[rewrite_local]

^https:\/\/biz-vip\.immomo\.com\/vCenter\/home\/index\?mkVersion=0 url script-response-body https://raw.githubusercontent.com/gitk01n/nothing/main/momo.js

  
[mitm]

hostname = *.immomo.com

*******************************/

let obj=JSON.parse($response.body)
obj.result["svipExpireTime"]=4096483190
obj.result["buySvip"]=true
obj.result["svipYear"]=1
$done({body:JSON.stringify(obj)})
