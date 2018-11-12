def serial_average(string)
  sss, xx, yy = string.split("-")
  zz = ((xx.to_f + yy.to_f) / 2).round(2)
  "#{sss}-#{zz}"
end
