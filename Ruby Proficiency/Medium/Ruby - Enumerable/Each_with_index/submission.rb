def skip_animals(animals, skip)
  # Your code here
  res = []
  animals.each_with_index do |elem, index|
    res << "#{index}:#{elem}"
  end
  res.drop(skip)
end
