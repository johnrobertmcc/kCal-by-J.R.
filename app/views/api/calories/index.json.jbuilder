@calories.each do |calory|
    json.set! calory.id do 
        json.partial! "api/calories/calory", calory: calory
    end
end