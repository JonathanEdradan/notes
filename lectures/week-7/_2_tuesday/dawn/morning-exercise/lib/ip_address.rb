##my solution 
def valid_ip(ip_address)
	ips = ip_address.split(".")

	ips.each do |i|
		i = i.to_i
		if i < 0 || i > 255 || i.length != 4
			return "Not a valid ip address"
		end
	end
	return "Valid ip address"
end

valid_ip(125.2.45.022)

##Ilias' solution

# ip address validator
def valid_ip?(address)
  #ternary that validates number count if string or returns false
  address.is_a?(String) ? validate_number_count(address) : false
end

# validates that there are exactly 4 numbers in the address
def validate_number_count(address)
  address_arr = address.split(".")
  address_arr.count == 4 ? validate_range(address_arr) : false
end

# validates that the number's value lies within a range
def validate_range(address_arr)
  address_arr.all? do |number|
    number.to_i <= 255 && number.to_i >= 0
  end
end
