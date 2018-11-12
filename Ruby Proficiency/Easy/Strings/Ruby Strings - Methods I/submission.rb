def process_text(text)
  text.map { |s| s.strip }.join(" ")
end
