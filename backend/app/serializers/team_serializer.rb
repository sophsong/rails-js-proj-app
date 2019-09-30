class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :ranking
end
