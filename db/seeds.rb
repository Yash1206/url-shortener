urls = [
  "https://bigbinary.com/jobs",
  "https://www.google.com",
  "http://www.youtube.com",
  "http://www.facebook.com",
  "http://www.yahoo.com",
  "http://www.amazon.com",
  "http://www.wikipedia.org"
]

urls.each do |url|
  Url.create!(original: url, category_id: 1)
end
