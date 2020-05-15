namespace :app do
  session = ActionDispatch::Integration::Session.new(Rails.application)
  desc "This task encodes short_url"
  task :encode => :environment do
    session.post "http://localhost:3000/url", params: { "url": { "full_url": ENV['URL'] } }
    response = JSON.parse(session.response.body)
      if response["success"]
        puts "The shortened url of #{ENV["URL"]} is #{response["short_url"]}."
      else
        puts response["errors"]
      end
  end

  desc "This task decodes full_url from the provided short_url"
  task :decode => :environment do
    short_url = ENV['SHORTURL']
    session.get "http://localhost:3000/show", params: { "url": { "short_url": short_url } }
    response = JSON.parse(session.response.body)
    if response["success"]
    puts "The original url of short url #{ENV["SHORTURL"]} is #{response["full_url"]}"
    else
      puts "No original url was found for the  short url #{ENV["SHORTURL"]}"
    end
  end

end
