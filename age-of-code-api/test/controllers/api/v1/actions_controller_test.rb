require 'test_helper'

class Api::V1::ActionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_actions_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_actions_show_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_actions_create_url
    assert_response :success
  end

end
