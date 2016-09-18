class Goal < ApplicationRecord
  belongs_to :user
  before_save :set_defaults

  
  private
  def set_defaults
    if self.new_record?
      self.remaining = self.target
      self.default = true if self.user.goals.count == 0
    end
  end
end
