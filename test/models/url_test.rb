require 'test_helper'
 
class UrlTest < ActiveSupport::TestCase
  
  test "Full url should not be empty" do
    test_url = Url.new
    test_url.save
    assert_equal ["Full can't be blank", "Full is invalid"], test_url.errors.full_messages
    assert_not test_url.save
  end

  test "Full url should be url format" do
    test_url = Url.new({
      full: "xyz"
    })
    test_url.save
    assert_equal ["Full is invalid"], test_url.errors.full_messages
    assert_not test_url.save
    test_url_2 = Url.new({
      full: "https://xyz.com"
    })
    assert test_url_2.save
  end

  test "Unique Full Url" do
    test_url = Url.new({
      full: "https://xyz.com"
    })
    assert test_url.save
    test_url_2 = Url.new({
      full: "https://xyz.com"
    })
    assert_not test_url_2.save
    test_url_2.save
    assert_equal ["Full has already been taken"], test_url_2.errors.full_messages
  end
end
