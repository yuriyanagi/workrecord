json.date @record.date.strftime("%Y/%m/%d")
json.start_time @record.start_time.strftime("%H:%M")
json.end_time @record.end_time.strftime("%H:%M")
json.major_class @record.major_class
json.middle_class @record.middle_class
json.small_class @record.small_class