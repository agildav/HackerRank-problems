def mask_article(text, elem)
  elem.each { |a| text.gsub!(a, strike(a)) }
  text
end

def strike(s)
  "<strike>#{s}</strike>"
end
