module GoalsHelper
  def order_using_priority (goals)
    goals.sort {|x,y| x.priority <=> y.priority }
  end
end
