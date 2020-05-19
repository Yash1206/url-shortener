urls = [
  "https://bigbinary.com/jobs",
  "https://www.google.com",
  "http://www.youtube.com",
  "http://www.facebook.com",
  "http://www.yahoo.com",
  "http://www.amazon.com",
  "http://www.wikipedia.org"
]
def hash
  loop do
    shortened = SecureRandom.hex(4)
    break shortened unless Url.where( shortened: shortened ).exists?
  end
end

urls.each do |url|
  Url.create(original: url, shortened: hash, pinned: false)
end
