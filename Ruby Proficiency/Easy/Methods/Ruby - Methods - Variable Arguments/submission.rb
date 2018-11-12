def full_name(f_name, *rest)
  rest.reduce(f_name) { |x, y| "#{x} #{y}" }
end
