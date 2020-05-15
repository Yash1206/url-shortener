namespace :app do
  session = ActionDispatch::Integration::Session.new(Rails.application)
  desc "This task encodes short_url"
  task :encode => :environment do
    session.post "http://localhost:3000/url", params: { "url": { "full_url": ENV['URL'] } }
    # session.post "http://localhost:3000/url", params: {full_url:ENV['URL']}
    res = JSON.parse(session.response.body)
      if res["success"]
        puts "The shortened url of #{ENV["URL"]} is #{res["short_url"]}."
      else
        puts res["errors"]
      end
  end

  desc "TODO"
  task :decode => :environment do
  end

end
