class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :position, :team_id
end
