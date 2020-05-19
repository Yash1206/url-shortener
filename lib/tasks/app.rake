namespace :app do
  session = ActionDispatch::Integration::Session.new(Rails.application)
  desc "This task encodes short_url"
  task :encode => :environment do
    session.post "http://localhost:3000/api/v1/urls", params: { "url": { "original": ENV['URL'] } }
    response = JSON.parse(session.response.body)
    response_status = session.response.status
      if response_status == 200
        puts "The shortened url of #{ENV["URL"]} is https://short.is/#{response["shortened"]}."
      else
        puts response["errors"]
      end
  end

  desc "This task decodes full_url from the provided short_url"
  task :decode => :environment do
    shortened = ENV['SHORTURL'].last(8)
    session.get "http://localhost:3000/api/v1/urls/#{shortened}"
    response = JSON.parse(session.response.body)
    response_status = session.response.status
    if response_status == 200
    puts "The original url of short url #{ENV["SHORTURL"]} is #{response["original"]}"
    else
      puts "No original url was found for the  short url #{ENV["SHORTURL"]}"
    end
  end

end
