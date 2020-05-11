namespace :app do
  desc "This task shortens url"

  task :encode do
    ARGV.each  { |a| task a.to_sym do ; end }
    puts ARGV[1]
  end
end