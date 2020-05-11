namespace :app do
  desc "This task shortens url"

  task :encode do
    puts task ARGV[1].to_sym
  end

  task :decode do
    puts task ARGV[1].to_sym
  end
  
end
