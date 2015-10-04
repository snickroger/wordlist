require 'json'

files = Dir['./*.txt']
categories = (files.map {|f| f.match(/\.\/(.*)_/)[1] }).uniq
data = []
categories.each do |cat|
  cat_data = {}
  cat_data[:name] = cat
  cat_files = Dir[format('./%s*.txt', cat)]
  cat_words = []
  cat_files.each do |file|
    File.foreach(file) do |line| 
      cat_words << line.strip
    end
  end
  cat_data[:words] = cat_words.sort
  data << cat_data
end

puts JSON.unparse(data)
