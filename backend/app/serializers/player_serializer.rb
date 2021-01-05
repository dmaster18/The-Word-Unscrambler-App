class PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :score, :rank
end
