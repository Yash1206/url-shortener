namespace :app do
  desc "This task shortens url"

  task :encode => :environment do
    newUrl = Url.create({
      full: ENV['URL']
    })
    if newUrl.save
      puts "The shortened url of #{newUrl.full} is #{newUrl.shortened}."
    else 
      puts newUrl.errors.full_messages
    end    
  end

  task :decode => :environment do
    shortUrl = ENV['SHORTURL']
    url = Url.find_by({shortened: shortUrl})
    if url.present?
      puts "The original url of short url #{shortUrl} is #{url.full}"
    else
      puts "No original url was found for the  short url #{shortUrl}"
    end
  end
  
end
