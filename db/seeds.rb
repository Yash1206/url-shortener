urls = [
  "https://bigbinary.com/jobs",
  "https://www.google.com",
  "http://www.youtube.com",
  "http://www.facebook.com",
  "http://www.yahoo.com",
  "http://www.amazon.com",
  "http://www.wikipedia.org"
]
# def hash
  
#     shortened = SecureRandom.hex(4)
#     break shortened unless Url.where( shortened: shortened ).exists?
  
# end

urls.each do |url|
  Url.create(original: url, shortened: Url.hash, pinned: false)
end
