class User < ApplicationRecord
  has_many :user_actions
  has_many :actions, through: :user_actions
end
